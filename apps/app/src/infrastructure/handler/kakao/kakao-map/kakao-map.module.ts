import kakaoConfig from "../../../../constants/kakao.config";
import { KakaoMapService } from "./kakao-map.service";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      load: [kakaoConfig],
    }),
  ],
  providers: [KakaoMapService],
  exports: [KakaoMapService],
})
export class KakaoMapModule {}
