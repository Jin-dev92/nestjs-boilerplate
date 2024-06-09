import { JWTPayload } from "./jwt.payload";
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import dayjs from "dayjs";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly validityPeriod: number = 7 * 60 * 60 * 24; // 1일 지속
  constructor() {
    // private readonly prismaService: PrismaService
    super({
      // 헤더 Authentication 에서 Bearer 토큰으로부터 jwt를 추출하겠다는 의미
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET_KEY, // jwt 생성시 비밀키로 사용할 텍스트 (노출 X)
      ignoreExpiration: false, // 만료된 토큰은 거부
    });
  }

  async validate(payload: JWTPayload) {
    const { iat, email } = payload;
    const nowUnix = dayjs().unix();
    const expireUnix = iat + this.validityPeriod;
    return true;
    // if (nowUnix > expireUnix) {
    //   // 토큰 만료
    //   return false;
    // }
    // const user = this.prismaService.user.findUniqueOrThrow({
    //   where: {
    //     email,
    //   },
    // });
    // if (!user) {
    //   throw new UnauthorizedException("토큰이 올바르지 않습니다.");
    // }
    // return user;
  }
}
