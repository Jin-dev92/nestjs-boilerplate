import { GetPlacesByCategoryDto } from "../../../infrastructure";
import { IQuery } from "@nestjs/cqrs";

export class GetPlacesQuery implements IQuery {
  constructor(readonly dto: GetPlacesByCategoryDto) {}
}
