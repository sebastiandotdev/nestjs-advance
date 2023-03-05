import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUsers() {
    return 'Obtiendo users';
  }

  @Post()
  create(@Body() playload) {
    return {
      message: 'creando un solo usuario',
      playload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() playload) {
    return {
      message: 'actulizanndo un solo usuario',
      playload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'eliminando un solo usuario',
      id,
    };
  }

  @Get(':id')
  searchById(@Param('id') id: number) {
    return {
      message: 'Obtiendo un solo usuario',
      id,
    };
  }
}
