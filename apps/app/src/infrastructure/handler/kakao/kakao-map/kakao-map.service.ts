import { KakaoMapCategoryCode } from "../../../../types/enum";
import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";

@Injectable()
export class KakaoMapService {
  private readonly KAKAO_REST_API_KEY = process.env.KAKAO_REST_API_KEY;

  constructor(private readonly httpService: HttpService) {}

  async getNearPlaces(
    latitude: number,
    longitude: number,
    categoryCode: KakaoMapCategoryCode,
  ) {
    const response = this.httpService.get(
      `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`,
    );
    console.log(response);
    // console.log(data);
    // .get(
    //   `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`,
    //   {
    //     headers: {
    //       Authorization: `KakaoAK ${this.KAKAO_REST_API_KEY}`,
    //     },
    //   },
    // )
    // return data;
  }
}
