import { GetPlacesByCategoryDto } from "../../../infrastructure";
import { IQuery } from "@nestjs/cqrs";

export class GetRecommendPlacesQuery implements IQuery {
  constructor(readonly query: GetPlacesByCategoryDto) {}
}
