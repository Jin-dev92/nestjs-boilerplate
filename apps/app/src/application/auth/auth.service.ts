import { LoginDto } from "../../types";
import { UserService } from "../user";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async login(dto: LoginDto) {
    /* 유저 id, password 검사 */
    const { email, password } = dto;
    if (!(await this.userService.checkUserPasswordExecute(email, password))) {
      throw new UnauthorizedException();
    }
    /* jwt 토큰 생성 */
    return this.jwtService.signAsync({ email });
  }
  async logout() {}
}
