import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScannerController } from './controllers/scanner.controller';
import { Scanner, ScannerSchema } from './schemas/scanner.schema';
import { ScannerService } from './services/scanner.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Scanner.name, schema: ScannerSchema, collection: 'scanner' },
    ]),
  ],
  providers: [ScannerService],
  controllers: [ScannerController],
})
export class ScannerModule {}
