import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello NestJS';
  }

  @Get('product')
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ) {
    return `products limit=${limit} offset=${offset} brand : ${brand}`;
  }

  @Get('product/filter')
  getProductFilter() {
    return 'I am filter';
  }

  @Get('product/:id')
  getProduct(@Param('id') id: string) {
    return `el producto que tu buscas tiene el numero ${id}`;
  }

  @Get('category/:id/product/:productId')
  getCategory(@Param('id') id: string, @Param() productId: string) {
    return `la categoria es ${id} y el id del producto es ${productId}`;
  }
}
