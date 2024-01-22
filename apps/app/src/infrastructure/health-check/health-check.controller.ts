import { Controller, Get } from "@nestjs/common";
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  PrismaHealthIndicator,
} from "@nestjs/terminus";
import { PrismaService } from "@prisma";

@Controller("health-check")
export class HealthCheckController {
  constructor(
    private readonly healthCheckService: HealthCheckService,
    private readonly httpHealthIndicator: HttpHealthIndicator,
    private readonly prismaHealthIndicator: PrismaHealthIndicator,
    private readonly prismaService: PrismaService,
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
          "http://localhost:8000",
        ),
      async () =>
        this.prismaHealthIndicator.pingCheck("database", this.prismaService),
    ]);
  }
}
