import { KakaoMapCategoryCode } from "../../types";
import { PlacesService } from "./places.service";
import { Test, TestingModule } from "@nestjs/testing";

describe("PlacesService", () => {
  let service: PlacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlacesService],
    }).compile();

    service = module.get<PlacesService>(PlacesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("카카오맵 맛집 목록 테스트", () => {
    expect(service).toBeDefined();
    const result = service.getPlacesExecutes({
      category_group_code: KakaoMapCategoryCode.RESTAURANT,
      radius: 200,
      y: "37.5883432",
      x: "127.0039158",
    });
    console.log(result);
  });
});
