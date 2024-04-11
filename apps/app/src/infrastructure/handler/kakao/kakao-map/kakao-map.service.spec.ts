import kakaoConfig from "../../../../constants/kakao.config";
import { KakaoMapCategoryCode } from "../../../../types";
import { KakaoMapService } from "./kakao-map.service";
import { HttpModule } from "@nestjs/axios";
import { ConfigModule } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import { AxiosError } from "axios";
import { catchError, firstValueFrom } from "rxjs";

describe("KakaoMapService", () => {
  let service: KakaoMapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule,
        ConfigModule.forRoot({
          load: [kakaoConfig],
        }),
      ],
      providers: [KakaoMapService],
    }).compile();

    service = module.get<KakaoMapService>(KakaoMapService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
  it("getNearPlaces", async () => {
    const response = await service.getNearPlaces({
      category_group_code: KakaoMapCategoryCode.RESTAURANT,
      radius: 1000,
      x: "37.5883432",
      y: "127.0039158",
    });
    const { data } = await firstValueFrom(
      response.pipe(
        catchError((err: AxiosError) => {
          console.log(err);
          throw err;
        }),
      ),
    );
    console.log(data);
  });
});
