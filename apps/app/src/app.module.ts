import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule, UserModule } from "./application";
import { HealthCheckModule, LoggerMiddleware } from "./infrastructure";
import { CommonModule } from "./infrastructure/common/common.module";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { WinstonModule, utilities } from "nest-winston";
import * as winston from "winston";

@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          level: "info",
          format: winston.format.combine(
            winston.format.timestamp(),
            utilities.format.nestLike("devJin-portfolio", {
              prettyPrint: true,
            }),
          ),
        }),
      ],
    }),
    HealthCheckModule,
    UserModule,
    AuthModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes();
  }
}
