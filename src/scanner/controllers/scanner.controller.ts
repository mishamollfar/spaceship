import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('scanner')
export class ScannerController {
  @Get()
  list() {
    return 'List scanner';
  }

  @Post()
  create() {
    return 'post scanner';
  }

  @Delete()
  deleteAll() {
    return 'delete scanner';
  }

  @Patch(':scannerId')
  updateItem() {
    return 'patch scanner';
  }

  @Delete(':scannerId')
  deleteItem() {
    return 'delete item scanner';
  }
}
