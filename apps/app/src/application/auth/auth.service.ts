import { LoginDto } from "../../types";
import { UserService } from "../user";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import dayjs from "dayjs";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    /* 유저 id, password 검사 */
    const { email, password } = dto;
    const user = await this.userService.checkUserPasswordExecute(
      email,
      password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    /* jwt 토큰 생성 */
    return this.jwtService.signAsync({
      email,
      sub: user.uid,
      iat: dayjs().unix(),
    });
  }

  async logout() {}
}
