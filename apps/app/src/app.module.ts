import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./application/user";
import { HealthCheckModule, LoggerMiddleware } from "./infrastructure";
import { CommonModule } from "./infrastructure/common/common.module";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { WinstonModule, utilities as WinstonUtils } from "nest-winston";
import winston from "winston";

@Module({
  imports: [
    HealthCheckModule,
    UserModule,
    CommonModule,
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          level: "info",
          format: winston.format.combine(
            winston.format.timestamp(),
            WinstonUtils.format.nestLike("devJin-portfolio", {
              prettyPrint: true,
            }),
          ),
        }),
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes();
  }
}
