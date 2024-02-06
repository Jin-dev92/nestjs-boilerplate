import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./application/user";
import { HealthCheckModule, LoggerMiddleware } from "./infrastructure";
import { CommonModule } from "./infrastructure/common/common.module";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";

@Module({
  imports: [HealthCheckModule, UserModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes();
  }
}
