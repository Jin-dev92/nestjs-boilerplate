import { IsNotEmpty, IsUUID } from "class-validator";

export class UserParamDto {
  @IsNotEmpty()
  @IsUUID()
  userUid: string;
}
