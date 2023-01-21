import { Module } from '@nestjs/common';
import { ScannerController } from './controllers/scanner.controller';
import { ScannerService } from './services/scanner.service';

@Module({
  imports: [],
  providers: [ScannerService],
  controllers: [ScannerController],
  exports: [ScannerService],
})
export class ScannerModule {}
