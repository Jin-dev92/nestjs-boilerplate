import { PlacesService } from "../application";
import { GetPlacesByCategoryDto } from "../infrastructure";
import { Controller, Get, Query } from "@nestjs/common";

@Controller("places")
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get("/recommend")
  async getRecommendPlaces(@Query() query: GetPlacesByCategoryDto) {
    return await this.placesService.getPlacesExecutes(query);
  }
}
