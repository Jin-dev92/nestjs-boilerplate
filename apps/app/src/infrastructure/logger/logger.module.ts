import { LoggerHandler } from "./logger.handler";
import { Module } from "@nestjs/common";

@Module({
  providers: [LoggerHandler],
  exports: [LoggerHandler],
})
export class LoggerModule {}
