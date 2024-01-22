import { HealthCheckController } from "./health-check.controller";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { PrismaClient } from "@prisma/client";
import { PrismaModule } from "nestjs-prisma";

@Module({
  imports: [HttpModule, TerminusModule, PrismaModule],
  providers: [PrismaClient],
  controllers: [HealthCheckController],
})
export class HealthCheckModule {}
