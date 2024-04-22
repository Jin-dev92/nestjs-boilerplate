import IgdbConfig from "../../../../constants/igdb.config";
import { IgdbAuthService } from "./igdb-auth.service";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      load: [IgdbConfig],
    }),
  ],
  providers: [IgdbAuthService],
})
export class IgdbAuthModule {}
