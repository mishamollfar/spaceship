import { Provider } from '@nestjs/common';
import * as mongoose from 'mongoose';

export const databaseProviders: Provider[] = [
  {
    provide: 'SPACESHIP_CONNECTION',
    useFactory: async () =>
      await mongoose.connect(
        'mongodb+srv://mollfar:misha07099217@spaceship.whelghk.mongodb.net/spaceship?retryWrites=true&w=majority',
      ),
  },
];
