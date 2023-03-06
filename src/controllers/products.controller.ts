import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getAll() {
    return this.productService.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.productService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return this.productService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.delete(parseInt(id));
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getById(@Param('id') id: string) {
    return this.productService.findOne(parseInt(id));
  }
}
