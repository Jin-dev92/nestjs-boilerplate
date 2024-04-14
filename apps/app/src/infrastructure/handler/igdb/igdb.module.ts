import igdbConfig from "../../../constants/igdb.config";
import { IgdbService } from "./igdb.service";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      load: [igdbConfig],
    }),
  ],
  providers: [IgdbService],
})
export class IgdbModule {}
