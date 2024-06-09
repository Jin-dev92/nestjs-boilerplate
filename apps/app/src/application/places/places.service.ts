import { GetPlacesByCategoryDto, JwtGuard } from "../../infrastructure";
import { GetRecommendPlacesQuery } from "./query";
import { Injectable, UseGuards } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";

@UseGuards(JwtGuard)
@Injectable()
export class PlacesService {
  constructor(private readonly queryBus: QueryBus) {}

  async getPlacesExecutes(params: GetPlacesByCategoryDto) {
    return await this.queryBus.execute(new GetRecommendPlacesQuery(params));
  }
}
