import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit=${limit} offset=${offset} brand : ${brand}`,
    };
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return {
      message: `el producto que tu buscas tiene el numero ${id}`,
    };
  }

  @Post()
  create(@Body() body: Array<object>) {
    return {
      message: 'Creando un producto',
      ...body,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'eliminando producto',
      id,
    };
  }
}
