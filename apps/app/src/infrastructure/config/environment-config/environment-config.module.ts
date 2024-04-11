import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".env", `.env.${process.env.NODE_ENV}`],
      // load: [globalConfig],
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class EnvironmentConfigModule {
  constructor() {}
}
