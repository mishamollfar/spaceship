import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FuelTank, FuelTankSchema } from './schemas/fuel-tank.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FuelTank.name, schema: FuelTankSchema, collection: 'fuel_tank' },
    ]),
  ],
  providers: [],
})
export class FuelTankModule {}
