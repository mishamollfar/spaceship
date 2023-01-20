import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { databaseProviders } from '../database/database.providers';
import { fuelTankProviders } from './providers/fuel-tank.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...databaseProviders, ...fuelTankProviders],
})
export class FuelTankModule {}
