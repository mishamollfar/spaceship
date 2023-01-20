import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { Scanner } from '../schemas/scanner.schema';
import { ScannerService } from '../services/scanner.service';

@Controller('scanner')
export class ScannerController {
  constructor(private scannerService: ScannerService) {}

  @Get()
  async findAll(): Promise<Scanner[]> {
    return await this.scannerService.findAll();
  }

  @Post()
  async create(
    @Body(new ValidationPipe({ transform: true })) body: Scanner,
  ): Promise<Scanner> {
    return await this.scannerService.create(body);
  }

  @Get(':id')
  async findItem(@Param('id') id: string): Promise<Scanner> {
    return await this.scannerService.findOne(id);
  }

  @Patch(':id')
  async updateItem(
    @Param('id') id: string,
    @Body(new ValidationPipe({ transform: true })) body: Scanner,
  ): Promise<Scanner> {
    return await this.scannerService.updateOne(id, body);
  }

  @Delete(':id')
  async deleteItem(@Param('id') id: string): Promise<Scanner> {
    return await this.scannerService.deleteOne(id);
  }
}
