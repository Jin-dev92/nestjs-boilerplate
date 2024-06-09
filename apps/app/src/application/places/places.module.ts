import { KakaoMapModule } from "../../infrastructure";
import { PlacesController } from "../../presentation";
import { PlacesService } from "./places.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [PlacesService, KakaoMapModule],
  controllers: [PlacesController],
  exports: [PlacesService],
})
export class PlacesModule {}
