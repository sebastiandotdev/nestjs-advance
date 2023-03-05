import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('brand')
export class BrandController {
  @Get()
  getBrand() {
    return 'Obteniendo brand';
  }

  @Post()
  create(@Body() playload) {
    return {
      message: 'creando una marca',
      playload,
    };
  }
}
