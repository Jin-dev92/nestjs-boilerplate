import { KakaoMapService } from "./kakao-map.service";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";

@Module({
  imports: [HttpModule],
  providers: [KakaoMapService],
})
export class KakaoMapModule {}
