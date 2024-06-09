import { HealthCheckHandler } from "./health-check.service";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";

@Module({
  imports: [HttpModule, TerminusModule],
  providers: [HealthCheckHandler],
  exports: [HealthCheckHandler],
})
export class HealthCheckModule {}
