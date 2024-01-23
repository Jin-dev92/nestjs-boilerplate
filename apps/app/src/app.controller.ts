import { AppService } from "./app.service";
import { Controller, Get } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}
  @Get()
  getHeathCheck() {
    return {
      environment: process.env.NODE_ENV ?? "local",
    };
  }
}
