import { KakaoMapModule } from "../../infrastructure";
import { KakaoMapCategoryCode } from "../../types";
import { PlacesService } from "./places.service";
import { GetRecommendPlacesQueryHandler } from "./query";
import { CqrsModule } from "@nestjs/cqrs";
import { Test, TestingModule } from "@nestjs/testing";

describe("PlacesService", () => {
  let service: PlacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule, KakaoMapModule],
      providers: [PlacesService, GetRecommendPlacesQueryHandler],
    }).compile();

    // await module.init();

    service = module.get<PlacesService>(PlacesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("카카오맵 맛집 목록 테스트", async () => {
    const result = await service.getPlacesExecutes({
      category_group_code: KakaoMapCategoryCode.RESTAURANT,
      radius: 200,
      y: "37.5883432",
      x: "127.0039158",
    });
    console.log("result", result);
  });
});
