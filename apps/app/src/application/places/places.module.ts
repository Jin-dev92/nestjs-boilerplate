import { KakaoMapModule } from "../../infrastructure";
import { PlacesController } from "./places.controller";
import { PlacesService } from "./places.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [PlacesService, KakaoMapModule],
  controllers: [PlacesController],
})
export class PlacesModule {}
