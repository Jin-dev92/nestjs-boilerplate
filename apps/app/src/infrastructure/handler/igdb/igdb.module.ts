import igdbConfig from "../../../constants/igdb.config";
import { IgdbHttpConfigFactory } from "./factory";
import { IgdbService } from "./igdb.service";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [
        HttpModule,
        ConfigModule.forRoot({
          load: [igdbConfig],
        }),
      ],
      useClass: IgdbHttpConfigFactory,
      // inject: [HttpService, ConfigService],
    }),
  ],
  providers: [IgdbService],
})
export class IgdbModule {}
