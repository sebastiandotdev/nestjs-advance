import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello NestJS';
  }

  @Get('nuevo')
  newEnpoint() {
    return 'new controllers';
  }

  @Get('ruta')
  nuevo() {
    return 'otro controllers';
  }
}
