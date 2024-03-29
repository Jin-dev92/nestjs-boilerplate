import { HealthCheckController } from "./health-check.controller";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { PrismaModule, PrismaService } from "@prisma";

@Module({
  imports: [HttpModule, TerminusModule, PrismaModule],
  providers: [PrismaService],
  controllers: [HealthCheckController],
})
export class HealthCheckModule {}
