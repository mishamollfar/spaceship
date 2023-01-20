import { Provider } from '@nestjs/common';
import { Connection } from 'mongoose';
import { ThrusterSchema } from '../schemas/thruster.schema';

export const thrusterProviders: Provider[] = [
  {
    provide: 'THRUSTER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('thruster', ThrusterSchema, 'thruster'),
    inject: ['SPACESHIP_CONNECTION'],
  },
];
