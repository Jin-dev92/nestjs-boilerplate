import { CommonService } from "../common/common.service";
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
    private readonly commonService: CommonService,
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
          this.commonService.getServerEnvironment(),
        ),
      async () =>
        await this.httpHealthIndicator.pingCheck(
          "client",
          this.commonService.getClientEnvironment(),
        ),
      async () =>
        this.prismaHealthIndicator.pingCheck("prisma", this.prismaService),
    ]);
  }
}
