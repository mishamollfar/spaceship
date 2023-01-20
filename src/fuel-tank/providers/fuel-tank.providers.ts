import { Provider } from '@nestjs/common';
import { Connection } from 'mongoose';
import { FuelTankSchema } from '../schemas/fuel-tank.schema';

export const fuelTankProviders: Provider[] = [
  {
    provide: 'FUEL_TANK_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('fuel_tank', FuelTankSchema, 'fuel_tank'),
    inject: ['SPACESHIP_CONNECTION'],
  },
];
