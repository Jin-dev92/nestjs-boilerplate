import { KakaoMapService } from "../../../../infrastructure";
import { KakaoMapResponse } from "../../../../types";
import { GetRecommendPlacesQuery } from "../get-recommend-places.query";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { AxiosError } from "axios";
import { catchError, firstValueFrom } from "rxjs";

@QueryHandler(GetRecommendPlacesQuery)
export class GetRecommendPlacesQueryHandler
  implements IQueryHandler<GetRecommendPlacesQuery>
{
  constructor(private readonly kakaoMapService: KakaoMapService) {}
  async execute({ query }: GetRecommendPlacesQuery): Promise<KakaoMapResponse> {
    try {
      const response = await this.kakaoMapService.getNearPlaces(query);
      const { data } = await firstValueFrom(
        response.pipe(
          catchError((err: AxiosError) => {
            console.log(err);
            throw err;
          }),
        ),
      );
      return data;
    } catch (e) {
      throw e;
    }
  }
}
