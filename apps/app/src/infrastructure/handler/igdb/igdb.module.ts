import { IgdbService } from "./igdb.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [IgdbService],
})
export class IgdbModule {}
