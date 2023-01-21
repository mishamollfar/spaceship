import { Injectable } from '@nestjs/common';
import { QueryVesselConfigsDto } from './interfaces/query-vessel-configs.dto';
import { VesselConfigs } from './interfaces/vessel-configs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Api, that will serve calculated suitable spaceship configurations based on the various requirements.';
  }

  /**
   * Method return array of suitable configuration objects, sorted by Price (DESC). Limit to 10 records
   * @param query: QueryVesselConfigsDto - {max_price: number - Maximum budget for a spaceship, in M $; journey_distance: number - Minimum required Journey Distance, in Light years; weight?: number - Maximum allowed Total Spaceship Weight
   * @return {VesselConfigs[]}
   */
  getVesselConfigs(query: QueryVesselConfigsDto): Promise<VesselConfigs[]> {
    // select record with all collection
    // gradation by type spaceship
    // equal total parameters and create object to response
    // select spaceship configuration to response with accept input parameters
    // sorting response
    // apply limit to return response
    return undefined;
  }
}
