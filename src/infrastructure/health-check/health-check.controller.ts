import { Controller, Get } from "@nestjs/common";
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
} from "@nestjs/terminus";

@Controller("health-check")
export class HealthCheckController {
  constructor(
    private readonly healthCheckService: HealthCheckService,
    private readonly httpHealthIndicator: HttpHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  async healthCheck() {
    return this.healthCheckService.check([
      async () =>
        await this.httpHealthIndicator.pingCheck(
          "server",
          "http://localhost:3000",
        ),
      async () =>
        await this.httpHealthIndicator.pingCheck(
          "client",
          "http://localhost:8080",
        ),
    ]);
  }
}
