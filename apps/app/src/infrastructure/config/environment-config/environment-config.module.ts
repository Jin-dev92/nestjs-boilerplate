import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env", `.env.${process.env.NODE_ENV}`],
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class EnvironmentConfigModule {
  constructor() {}
}
