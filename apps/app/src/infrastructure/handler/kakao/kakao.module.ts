import { Module } from '@nestjs/common';
import { KakaoService } from './kakao.service';

@Module({
  providers: [KakaoService]
})
export class KakaoModule {}
