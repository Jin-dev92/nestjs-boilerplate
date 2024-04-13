import { KakaoMapModule } from "../../infrastructure";
import { PlacesController } from "../../presentation";
import { PlacesService } from "./places.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [PlacesService, KakaoMapModule],
  controllers: [PlacesController],
})
export class PlacesModule {}
