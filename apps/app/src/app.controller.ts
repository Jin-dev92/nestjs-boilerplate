import { AppService } from "./app.service";
import { AuthGuard } from "./infrastructure";
import { Controller, Get, UseGuards } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@UseGuards(AuthGuard)
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
