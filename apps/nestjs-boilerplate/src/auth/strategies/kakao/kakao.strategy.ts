import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Profile, Strategy } from 'passport-kakao';
import { ConfigService } from '@nestjs/config';
import { IKakaoUser } from './interfaces';

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.get('KAKAO_CLIENT_ID'),
      clientSecret: configService.get('KAKAO_CLIENT_SECRET'),
      callbackURL: configService.get('SERVER_URL') + '/auth/kakao/callback',
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: IKakaoUser, info?: any) => void,
  ) {
    try {
      const { _json } = profile;
      console.log('kakaoStrategy Profile ', profile);
      done(null, {
        kakaoId: _json.id,
      });
    } catch (error) {
      done(error);
    }
  }
}
