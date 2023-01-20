import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { databaseProviders } from '../database/database.providers';
import { scannerProviders } from './providers/scanner.providers';
import { ScannerController } from './controllers/scanner.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...databaseProviders, ...scannerProviders],
  controllers: [ScannerController],
})
export class ScannerModule {}
