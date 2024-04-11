import { KakaoMapCategoryCode } from "../../../../../types";

export class GetPlacesByCategoryDto {
  "category_group_code": KakaoMapCategoryCode;
  x: string;
  y: string;
  radius: number;
  rect: string;
  page: number = 1;
  size: number = 15;
  sort: "distance" | "accuracy" = "accuracy";
}
