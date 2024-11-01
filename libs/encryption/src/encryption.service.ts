import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { ConfigService } from '@nestjs/config';
import { User } from '@libs/database';
import { JwtService } from '@nestjs/jwt';
import { IJwtPayload } from '@libs/encryption/type';

@Injectable()
export class EncryptionService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  getSalt() {
    try {
      const SALT_OR_ROUNDS =
        this.configService.getOrThrow<number>('AUTH_SALT_ROUNDS');
      return bcrypt.genSaltSync(+SALT_OR_ROUNDS);
    } catch (e) {
      throw e;
    }
  }

  crypt(
    str: string,
    algorithm: 'aes-256-cbc',
    key: string | Buffer,
    iv: string | Buffer,
  ) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let result = cipher.update(str, 'utf8', 'base64');
    result += cipher.final('base64');

    return result;
  }

  decrpyt(
    str: string,
    algorithm: 'aes-256-cbc',
    key: string | Buffer,
    iv: string | Buffer,
  ) {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let result = decipher.update(str, 'base64', 'utf8');
    result += decipher.final('utf8');

    return result;
  }

  hashPassword(password: string, salt: string = '') {
    try {
      const pass = crypto.pbkdf2Sync(
        password,
        salt,
        +this.configService.getOrThrow<number>('AUTH_REPEAT'),
        +this.configService.getOrThrow<number>('AUTH_LENGTH'),
        'sha512',
      );
      // hex코드로 주기때문에 암호화된 길이 * 2 가됨
      // 현재는 암호화길이 64 * 2 => 128자의 암호화된 비밀번호 생성
      return pass.toString('hex');
    } catch (e) {
      throw e;
    }
  }

  validatePassword(password: string, salt: string, hash: string) {
    const hashPassword = this.hashPassword(password, salt);
    return hashPassword === hash;
  }

  generateAccessToken(user: User) {
    const payload: IJwtPayload = {
      userUid: user.uuid,
    };
    return this.jwtService.sign(payload);
  }

  generateRefreshToken(user: User) {
    const payload: IJwtPayload = {
      userUid: user.uuid,
    };
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: this.configService.get<string>('JWT_REFRESH_EXPIRES_IN'),
    });
    return refreshToken;
  }
}
