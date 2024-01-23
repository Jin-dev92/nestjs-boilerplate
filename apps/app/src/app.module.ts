import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./application/user";
import {
  AuthGuard,
  EnvironmentConfigModule,
  HealthCheckModule,
  LoggerMiddleware,
} from "./infrastructure";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "@prisma";
import * as process from "process";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    EnvironmentConfigModule,
    HealthCheckModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: PrismaModule, useClass: AuthGuard }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes();
  }
}
