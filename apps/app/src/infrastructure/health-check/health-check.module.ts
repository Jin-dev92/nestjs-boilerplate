import { PrismaModule, PrismaService } from "../../../../../prisma";
import { HealthCheckController } from "./health-check.controller";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";

@Module({
  imports: [HttpModule, TerminusModule, PrismaModule],
  providers: [PrismaService],
  controllers: [HealthCheckController],
})
export class HealthCheckModule {}
