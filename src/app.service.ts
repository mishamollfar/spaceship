import { Injectable } from '@nestjs/common';
import { GroupedBody } from './body/interfaces/grouped-body';
import { BodyService } from './body/services/body.service';
import { GroupedFuelTank } from './fuel-tank/interfaces/grouped-fuel-tank';
import { FuelTank } from './fuel-tank/schemas/fuel-tank.schema';
import { FuelTankService } from './fuel-tank/services/fuel-tank.service';
import { QueryVesselConfigsDto } from './interfaces/query-vessel-configs.dto';
import { VesselConfigs } from './interfaces/vessel-configs';
import { ScannerService } from './scanner/services/scanner.service';
import { GroupedScanner } from './scanner/types/grouped-scanner';
import { GroupedThruster } from './thruster/interfaces/grouped-thruster';
import { Thruster } from './thruster/schemas/thruster.schema';
import { ThrusterService } from './thruster/services/thruster.service';

@Injectable()
export class AppService {
  constructor(
    private bodyService: BodyService,
    private fuelTankService: FuelTankService,
    private scannerService: ScannerService,
    private thrusterService: ThrusterService,
  ) {}

  getHello(): string {
    return 'Api, that will serve calculated suitable spaceship configurations based on the various requirements.';
  }

  /**
   * Method return array of suitable configuration objects, sorted by Price (DESC). Limit to 10 records
   * @param query: QueryVesselConfigsDto - {max_price: number - Maximum budget for a spaceship, in M $; journey_distance: number - Minimum required Journey Distance, in Light years; weight?: number - Maximum allowed Total Spaceship Weight
   * @return {Promise<VesselConfigs[]>}
   */
  async getVesselConfigs(
    query: QueryVesselConfigsDto,
  ): Promise<VesselConfigs[]> {
    // generate response object without equal journey_distance
    let spaceshipConfigs: VesselConfigs[] =
      await this.getModelsDataAndFormatResponseObject();

    // equal journey_distance
    spaceshipConfigs = spaceshipConfigs.map((config: VesselConfigs) => {
      return {
        ...config,
        journey_distance: this.equalJourneyDistance(config),
      };
    });

    // select spaceship configuration to response with accept input parameters
    spaceshipConfigs = spaceshipConfigs.filter(
      (item) =>
        item.price <= query.max_price &&
        item.journey_distance >= query.journey_distance &&
        (query.weight ? item.price <= query.weight : true),
    );
    // // sorting response
    spaceshipConfigs = spaceshipConfigs.sort(
      (firstRecord, nextRecord) => nextRecord.price - firstRecord.price,
    );
    // apply limit to return response
    return spaceshipConfigs.slice(0, 9);
  }

  /**
   * Method select data with all collection and create response object
   * @return {Promise<VesselConfigs[]>}
   */
  async getModelsDataAndFormatResponseObject() {
    // select record with all collection
    const allModelDocuments: [
      GroupedBody[],
      GroupedFuelTank[],
      GroupedScanner[],
      GroupedThruster[],
    ] = await this.getAllModelDocuments();

    // concat aggregated data
    const configs: VesselConfigs = {
      body: undefined,
      fuelTank: undefined,
      price: 0,
      scanner: undefined,
      thruster: undefined,
      weight: 0,
    };

    // equal total parameters and create object to response
    allModelDocuments.forEach((model) => {
      model.forEach((document) => {
        if (!configs[document._id]) {
          // if config variable is empty then added first data
          configs[document._id] = Object.assign({}, document);
        } else {
          // equal total price
          const price = (configs[document._id]?.price || 0) + document.price;
          // equal total weight
          const weight = (configs[document._id]?.weight || 0) + document.weight;
          // assign new and exists data
          configs[document._id] = {
            ...configs[document._id],
            ...document,
            price,
            weight,
          };
        }
        // remove redundant field
        delete configs[document._id]._id;
      });
    });

    // prepare object to response
    return Object.keys(configs).map((key: string) => {
      return configs[key];
    });
  }

  /**
   * Equal journey_distance parameter
   * @param config: VesselConfigs - spaceship objects
   * @return {number}
   */
  equalJourneyDistance(config: VesselConfigs): number {
    const cf = !config?.fuelTank
      ? 0
      : config.fuelTank.reduce(
          (sum, currentItem: FuelTank) => sum + currentItem.fuel_capacity,
          0,
        );
    const et = !config?.thruster
      ? 0
      : config.thruster.reduce(
          (sum, currentItem: Thruster) => sum + currentItem.efficiency,
          0,
        );
    const xf = 43.29;
    return (et * cf * xf) / (!config?.weight ? 1 : config.weight);
  }

  /**
   * Method get all documents with all models
   * @return {Promise<[GroupedBody[], GroupedFuelTank[], GroupedScanner[], GroupedThruster[]]>}
   */
  async getAllModelDocuments(): Promise<
    [GroupedBody[], GroupedFuelTank[], GroupedScanner[], GroupedThruster[]]
  > {
    return await Promise.all([
      this.bodyService.findGroupedBodyByTypes(),
      this.fuelTankService.findFuelTankByTypes(),
      this.scannerService.findGroupedScannersByTypes(),
      this.thrusterService.findThrusterByTypes(),
    ]);
  }
}
