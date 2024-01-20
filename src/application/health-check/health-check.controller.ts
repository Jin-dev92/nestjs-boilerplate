import { Controller, Get } from "@nestjs/common";
import { HealthCheckService, HttpHealthIndicator } from "@nestjs/terminus";

@Controller("health-check")
export class HealthCheckController {
  constructor(
    private readonly healthCheckService: HealthCheckService,
    private readonly httpHealthIndicator: HttpHealthIndicator,
  ) {}

  @Get("/")
  heartCheck() {
    return this.healthCheckService.check([
      () =>
        this.httpHealthIndicator.pingCheck("server", "http://localhost:3000"),
    ]);
  }
}
