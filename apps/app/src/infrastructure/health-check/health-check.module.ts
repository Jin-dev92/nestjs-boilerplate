import { HealthCheckHandler } from "./health-check.service";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { PrismaModule } from "@prisma";

@Module({
  imports: [HttpModule, TerminusModule, PrismaModule],
  providers: [HealthCheckHandler],
  exports: [HealthCheckHandler],
})
export class HealthCheckModule {}
