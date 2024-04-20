import { IgdbHttpConfigFactory } from "./factory";
import { IgdbService } from "./igdb.service";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: IgdbHttpConfigFactory,
    }),
  ],
  providers: [IgdbService],
})
export class IgdbModule {}
