import { Provider } from '@nestjs/common';
import { Connection } from 'mongoose';
import { ScannerSchema } from '../schemas/scanner.schema';

export const scannerProviders: Provider[] = [
  {
    provide: 'SCANNER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('scanner', ScannerSchema, 'scanner'),
    inject: ['SPACESHIP_CONNECTION'],
  },
];
