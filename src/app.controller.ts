import { AppService } from './app.service';
import { IGetHeathCheck } from './interface';
import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHeathCheck(): IGetHeathCheck {
    return this.appService.getHeathCheck();
  }
}
