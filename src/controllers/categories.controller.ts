import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  obtain() {
    return {
      message: 'Obteniendo todo los productos',
    };
  }

  @Post()
  create(@Body() playloads) {
    return {
      message: 'creando na categoria',
      playloads,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() playloads) {
    return {
      message: 'actulizando una categoria',
      playloads,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'eliminando una categoria',
      id,
    };
  }

  @Get(':id/product/:productId')
  getCategory(@Param('id') id: string, @Param() productId: string) {
    return `la categoria es ${id} y el id del producto es ${productId}`;
  }
}
