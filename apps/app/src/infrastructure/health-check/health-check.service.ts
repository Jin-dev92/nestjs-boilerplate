import { CommonService } from "../common/common.service";
import { Injectable } from "@nestjs/common";
import { HttpHealthIndicator, PrismaHealthIndicator } from "@nestjs/terminus";
import { HealthCheckService } from "@nestjs/terminus/dist/health-check/health-check.service";
import { PrismaService } from "@prisma";

@Injectable()
export class HealthCheckHandler {
  constructor(
    private readonly healthCheckService: HealthCheckService,
    private readonly commonService: CommonService,
    private readonly httpHealthIndicator: HttpHealthIndicator,
    private readonly prismaHealthIndicator: PrismaHealthIndicator,
    private readonly prismaService: PrismaService,
  ) {}

  getHeathCheck() {
    return this.healthCheckService.check([
      async () =>
        await this.httpHealthIndicator.pingCheck(
          "google",
          "https://www.google.com",
          {
            timeout: 3000,
          },
        ),
      async () =>
        this.prismaHealthIndicator.pingCheck("prisma", this.prismaService),
    ]);
  }
}
