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

  /**
   * get /api/scanner - for show all scanner save by scanner collection
   */
  @Get()
  async findAll(): Promise<Scanner[]> {
    return await this.scannerService.findAll();
  }

  /**
   * post /api/scanner - for create new document into scanner collection by body parameters
   * @param body: Scanner
   */
  @Post()
  async create(
    @Body(new ValidationPipe({ transform: true })) body: Scanner,
  ): Promise<Scanner> {
    return await this.scannerService.create(body);
  }

  /**
   * get /api/scanner/:id - for show scanner document by id
   * @param id: string
   */
  @Get(':id')
  async findItem(@Param('id') id: string): Promise<Scanner> {
    return await this.scannerService.findOne(id);
  }

  /**
   * path /api/scanner/:id - for find scanner document by id and update field by body parameters
   * @param id: string
   * @param body: Scanner
   */
  @Patch(':id')
  async updateItem(
    @Param('id') id: string,
    @Body(new ValidationPipe({ transform: true })) body: Scanner,
  ): Promise<Scanner> {
    return await this.scannerService.updateOne(id, body);
  }

  /**
   * delete /api/scanner/:id - for remove scanner document by id
   * @param id: string
   */
  @Delete(':id')
  async deleteItem(@Param('id') id: string): Promise<Scanner> {
    return await this.scannerService.deleteOne(id);
  }
}
