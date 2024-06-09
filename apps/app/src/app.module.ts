import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule, UserModule } from "./application";
import {
  CommonModule,
  HealthCheckModule,
  LoggerMiddleware,
} from "./infrastructure";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { PrismaModule } from "@prisma";
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
    PrismaModule,
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
