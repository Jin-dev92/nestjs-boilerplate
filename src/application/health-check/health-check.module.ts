import { HealthCheckController } from "./health-check.controller";
import { Module } from "@nestjs/common";
import { HealthCheckService } from "@nestjs/terminus";

@Module({
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
})
export class HealthCheckModule {}
