import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/product/:productId')
  getCategory(@Param('id') id: string, @Param() productId: string) {
    return `la categoria es ${id} y el id del producto es ${productId}`;
  }
}
