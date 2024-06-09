import { KakaoMapModule } from "../../infrastructure";
import { PlacesController } from "../../presentation";
import { PlacesService } from "./places.service";
import { GetRecommendPlacesQueryHandler } from "./query";
import { Module } from "@nestjs/common";

@Module({
  imports: [KakaoMapModule],
  controllers: [PlacesController],
  providers: [PlacesService, GetRecommendPlacesQueryHandler],
  exports: [PlacesService],
})
export class PlacesModule {}
