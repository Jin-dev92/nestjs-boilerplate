import { KakaoMapResponse } from "../../../../types";
import { GetPlacesByCategoryDto } from "./dto";
import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";

@Injectable()
export class KakaoMapService {
  private readonly KAKAO_REST_API_KEY = process.env.KAKAO_REST_API_KEY;

  constructor(private readonly httpService: HttpService) {}

  async getNearPlaces(params: GetPlacesByCategoryDto) {
    const response = this.httpService.get<KakaoMapResponse>(
      `https://dapi.kakao.com/v2/local/search/category.json`,
      {
        params,
        headers: {
          Authorization: `KakaoAK ${this.KAKAO_REST_API_KEY}`,
        },
      },
    );
    return response;
  }
}
