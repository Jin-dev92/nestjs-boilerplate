import { IgdbHttpConfigFactory } from "./factory";
import { IgdbAuthModule, IgdbAuthService } from "./igdb-auth";
import { IgdbService } from "./igdb.service";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: IgdbHttpConfigFactory,
      imports: [IgdbAuthService],
    }),
    IgdbAuthModule,
  ],
  providers: [IgdbService],
})
export class IgdbModule {}
