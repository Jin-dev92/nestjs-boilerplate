import { IgdbHttpConfigFactory } from "./factory";
import { IgdbAuthModule } from "./igdb-auth";
import { IgdbService } from "./igdb.service";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { WinstonLogger } from "nest-winston";

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: IgdbHttpConfigFactory,
      imports: [IgdbAuthModule],
    }),
    IgdbAuthModule,
    WinstonLogger,
  ],
  providers: [IgdbService],
  exports: [IgdbService],
})
export class IgdbModule {}
