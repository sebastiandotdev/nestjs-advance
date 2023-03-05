import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

@Controller('order')
export class OrderController {
  @Get()
  getOrder() {
    return 'Obtiendo order';
  }

  @Post()
  create(@Body() playload) {
    return {
      message: 'creando una orden',
      playload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() playload) {
    return {
      message: 'actuliznando una orden',
      playload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'eliminado una orden',
      id,
    };
  }

  @Get(':id')
  searchById(@Param('id') id: number) {
    return {
      message: 'Obtiendo una sola orden',
      id,
    };
  }
}
