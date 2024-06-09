import { GetPlacesByCategoryDto } from "../../infrastructure";
import { KakaoMapResponse } from "../../types";
import { GetRecommendPlacesQuery } from "./query";
import { Injectable } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";

@Injectable()
export class PlacesService {
  constructor(private readonly queryBus: QueryBus) {}

  async getPlacesExecutes(params: GetPlacesByCategoryDto) {
    return await this.queryBus.execute<
      GetRecommendPlacesQuery,
      KakaoMapResponse
    >(new GetRecommendPlacesQuery(params));
  }
}
