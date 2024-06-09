import { KakaoOauthService } from "./kakao-oauth.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [KakaoOauthService],
})
export class KakaoOauthModule {}
