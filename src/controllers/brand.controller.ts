import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

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

  @Put(':id')
  update(@Param('id') id: number, @Body() playload) {
    return {
      message: 'actulizando una marca',
      playload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'eliminando una marca',
      id,
    };
  }

  @Get(':id')
  searchById(@Param('id') id: number) {
    return {
      message: 'Obteniendo una marca',
      id,
    };
  }
}
