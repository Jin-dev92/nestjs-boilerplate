import { KakaoMapService } from "./kakao-map.service";
import { Test, TestingModule } from "@nestjs/testing";

describe("KakaoMapService", () => {
  let service: KakaoMapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KakaoMapService],
    }).compile();

    service = module.get<KakaoMapService>(KakaoMapService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
  it("getNearPlaces", async () => {
    // await service.getNearPlaces();
  });
});
