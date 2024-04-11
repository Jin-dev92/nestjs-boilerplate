import { IgdbService } from "./igdb.service";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";

@Module({
  imports: [HttpModule],
  providers: [IgdbService],
})
export class IgdbModule {}
