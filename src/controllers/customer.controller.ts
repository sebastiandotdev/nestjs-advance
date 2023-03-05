import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Delete,
  Put,
} from '@nestjs/common';

@Controller('customer')
export class CustomerController {
  @Get()
  getCustomer() {
    return 'Obteniendo customer';
  }

  @Post()
  create() {
    return {
      message: 'creando un customer',
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() playload) {
    return {
      message: 'actulizando un customer',
      playload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'eliminando un customer',
      id,
    };
  }
}
