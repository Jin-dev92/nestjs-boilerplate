import { Test, TestingModule } from '@nestjs/testing';
import { KakaoMapService } from './kakao-map.service';

describe('KakaoMapService', () => {
  let service: KakaoMapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KakaoMapService],
    }).compile();

    service = module.get<KakaoMapService>(KakaoMapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
