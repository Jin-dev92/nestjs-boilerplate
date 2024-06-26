import { Type } from "class-transformer";
import { IsNumber, IsOptional } from "class-validator";
import "reflect-metadata";

export class GetUsersDto {
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  page: number = 0;

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  count: number = 30;
}
