import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Body, BodySchema } from '../body/schemas/body.schema';
import {
  FuelTank,
  FuelTankSchema,
} from '../fuel-tank/schemas/fuel-tank.schema';
import { Scanner, ScannerSchema } from '../scanner/schemas/scanner.schema';
import { Thruster, ThrusterSchema } from '../thruster/schemas/thruster.schema';

@Global()
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mollfar:misha07099217@spaceship.whelghk.mongodb.net/spaceship',
      { retryWrites: true, w: 'majority' },
    ),
    MongooseModule.forFeature([
      { name: Body.name, schema: BodySchema, collection: 'body' },
      { name: FuelTank.name, schema: FuelTankSchema, collection: 'fuel_tank' },
      { name: Scanner.name, schema: ScannerSchema, collection: 'scanner' },
      { name: Thruster.name, schema: ThrusterSchema, collection: 'thruster' },
    ]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
