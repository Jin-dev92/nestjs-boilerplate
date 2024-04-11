import { KakaoMapCategoryCode } from "../../../../../types";
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from "class-validator";

export enum GetPlacesByCategorySortEnum {
  DISTANCE = "distance",
  ACCURACY = "accuracy",
}

export class GetPlacesByCategoryDto {
  @IsNotEmpty()
  @IsEnum(KakaoMapCategoryCode)
  category_group_code: KakaoMapCategoryCode;

  @IsNotEmpty()
  @IsString()
  x: string;

  @IsNotEmpty()
  @IsString()
  y: string;

  @Min(0)
  @Max(20000)
  radius: number; // 미터 단위

  @IsOptional()
  @IsString()
  rect?: string;

  @IsOptional()
  @IsNumber()
  page?: number = 1;

  @IsOptional()
  @IsNumber()
  size?: number = 15;

  @IsEnum(GetPlacesByCategorySortEnum)
  sort?: GetPlacesByCategorySortEnum = GetPlacesByCategorySortEnum.ACCURACY;
}
