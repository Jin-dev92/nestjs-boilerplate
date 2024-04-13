import { GetPlacesByCategoryDto, KakaoMapService } from "../../infrastructure";
import { Injectable } from "@nestjs/common";
import { AxiosError } from "axios";
import { catchError, firstValueFrom } from "rxjs";

@Injectable()
export class PlacesService {
  constructor(private readonly kakaoMapService: KakaoMapService) {}

  async getPlacesExecutes(params: GetPlacesByCategoryDto) {
    const response = await this.kakaoMapService.getNearPlaces(params);
    const { data } = await firstValueFrom(
      response.pipe(
        catchError((err: AxiosError) => {
          throw err;
        }),
      ),
    );
    // data.documents.map((place) => place.);
    return data;
  }
}
