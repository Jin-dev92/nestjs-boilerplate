import { KAKAO_CONFIG_KEY } from "../../../../constants/enum";
import { KakaoMapResponse } from "../../../../types";
import { GetPlacesByCategoryDto } from "./dto";
import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class KakaoMapService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getNearPlaces(params: GetPlacesByCategoryDto) {
    const response = this.httpService.get<KakaoMapResponse>(
      `https://dapi.kakao.com/v2/local/search/category.json`,
      {
        params,
        headers: {
          Authorization: `KakaoAK ${this.configService.get<string>(KAKAO_CONFIG_KEY.KAKAO_REST_API_KEY)}`,
        },
      },
    );
    return response;
  }
}
