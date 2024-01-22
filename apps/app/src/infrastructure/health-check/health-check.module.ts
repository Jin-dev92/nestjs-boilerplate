import { HealthCheckController } from "./health-check.controller";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";

@Module({
  imports: [HttpModule, TerminusModule],
  controllers: [HealthCheckController],
})
export class HealthCheckModule {}
