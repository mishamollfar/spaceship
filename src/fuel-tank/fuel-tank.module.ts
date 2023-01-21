import { Module } from '@nestjs/common';
import { FuelTankService } from './services/fuel-tank.service';

@Module({
  imports: [],
  providers: [FuelTankService],
  exports: [FuelTankService],
})
export class FuelTankModule {}
