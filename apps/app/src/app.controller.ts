import { HealthCheckHandler } from "./infrastructure/health-check/health-check.service";
import { Controller, Get } from "@nestjs/common";
import { HealthCheck } from "@nestjs/terminus";

@Controller()
export class AppController {
  constructor(private readonly healthCheckHandler: HealthCheckHandler) {}

  @HealthCheck()
  @Get()
  getHeathCheck() {
    return this.healthCheckHandler.getHeathCheck();
  }
}
