import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

export class UserParamDto {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  userid: number;
}
