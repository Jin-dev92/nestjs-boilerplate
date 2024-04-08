import { KakaoService } from "./kakao.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [KakaoService],
})
export class KakaoModule {}
