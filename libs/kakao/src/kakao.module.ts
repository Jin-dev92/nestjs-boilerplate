import { Module } from '@nestjs/common';
import { KakaoService } from './kakao.service';

@Module({
  providers: [KakaoService],
  exports: [KakaoService],
})
export class KakaoModule {}
