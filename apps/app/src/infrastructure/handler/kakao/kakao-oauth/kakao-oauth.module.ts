import { Module } from '@nestjs/common';
import { KakaoOauthService } from './kakao-oauth.service';

@Module({
  providers: [KakaoOauthService]
})
export class KakaoOauthModule {}
