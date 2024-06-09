import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
  // @Vali
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
