import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { QueryVesselConfigsDto } from './interfaces/query-vessel-configs.dto';
import { VesselConfigs } from './interfaces/vessel-configs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * get /api/getVesselConfigs - array of suitable configuration object
   * @param query: QueryVesselConfigsDto - {
   * max_price: number - Maximum budget for a spaceship, in M $;
   * journey_distance: number - Minimum required Journey Distance, in Light years;
   * weight?: number - optional; Maximum allowed Total Spaceship Weight
   * }
   * @return {Promise<VesselConfigs[]>}
   */
  @Get('getVesselConfigs')
  async getVesselConfigs(
    @Query(new ValidationPipe({ transform: true }))
    query: QueryVesselConfigsDto,
  ): Promise<VesselConfigs[]> {
    return await this.appService.getVesselConfigs(query);
  }
}
