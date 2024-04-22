import { IgdbHttpConfigFactory } from "./factory";
import { IgdbAuthModule } from "./igdb-auth";
import { IgdbService } from "./igdb.service";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [IgdbAuthModule],
      useClass: IgdbHttpConfigFactory,
    }),
    IgdbAuthModule,
  ],
  providers: [IgdbService],
})
export class IgdbModule {}
