import { KakaoMapService } from "./kakao-map.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [KakaoMapService],
})
export class KakaoMapModule {}
