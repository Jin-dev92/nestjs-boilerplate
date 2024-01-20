import { HealthCheckController } from "./health-check.controller";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";

@Module({
  imports: [TerminusModule, HttpModule],
  providers: [HealthCheckController],
})
export class HealthCheckModule {}
