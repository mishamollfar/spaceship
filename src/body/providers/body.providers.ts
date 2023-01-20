import { Provider } from '@nestjs/common';
import { Connection } from 'mongoose';
import { BodySchema } from '../schemas/body.schema';

export const bodyProviders: Provider[] = [
  {
    provide: 'BODY_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('body', BodySchema, 'body'),
    inject: ['SPACESHIP_CONNECTION'],
  },
];
