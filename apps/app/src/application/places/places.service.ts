import { KakaoMapService } from "../../infrastructure";
import { GetPlacesByCategoryDto } from "../../infrastructure/handler/kakao/kakao-map/dto";
import { Injectable } from "@nestjs/common";
import { AxiosError } from "axios";
import { catchError, firstValueFrom } from "rxjs";

@Injectable()
export class PlacesService {
  constructor(private readonly kakaoMapService: KakaoMapService) {}

  async getPlaces(params: GetPlacesByCategoryDto) {
    const response = await this.kakaoMapService.getNearPlaces(params);
    const { data } = await firstValueFrom(
      response.pipe(
        catchError((err: AxiosError) => {
          console.log(err);
          throw err;
        }),
      ),
    );
    return data;
  }
}
