import { Test, TestingModule } from '@nestjs/testing';
import { KakaoOauthService } from './kakao-oauth.service';

describe('KakaoOauthService', () => {
  let service: KakaoOauthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KakaoOauthService],
    }).compile();

    service = module.get<KakaoOauthService>(KakaoOauthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
