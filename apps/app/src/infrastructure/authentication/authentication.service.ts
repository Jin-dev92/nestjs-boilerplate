import { CryptoService } from "../crypto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthenticationService {
  private readonly repeat: number = 10000;
  private readonly length: number = 64;
  private readonly MAX_PASSWORD_LENGTH: number = 40;
  private readonly MIN_PASSWORD_LENGTH: number = 6;

  constructor(private readonly cryptoService: CryptoService) {}

  passwordValidate(password: string) {
    if (!password) {
      return false;
    }
    // 6자 이상 40자 이하
    if (
      password.length < this.MIN_PASSWORD_LENGTH ||
      password.length > this.MAX_PASSWORD_LENGTH
    ) {
      return false;
    }
    return Boolean(this.getPasswordScore(password) >= 3);
  }

  getSalt = this.cryptoService.generateSalt;

  createPasswordHash(password: string, salt: string) {
    try {
      return this.cryptoService.hashPassword(
        password,
        salt,
        this.repeat,
        this.length,
      );
    } catch (e) {
      throw e;
    }
  }

  verifyPassword(password: string, passwordHash: string, salt: string | null) {
    return this.createPasswordHash(password, salt) === passwordHash;
  }

  private getPasswordScore(password: string) {
    const uppercaseCnt = password.match(/[A-Z]/g)?.length ?? 0;
    const numberCnt = password.match(/\d/g)?.length ?? 0;
    const specialCharCnt = password.match(/[!@#$%^&*?\[\]]/g)?.length ?? 0;

    // 10자 이상 1점
    let score = password.length >= 10 ? 1 : 0;
    // 대문자 1점
    score += !!uppercaseCnt ? 1 : 0;
    // 숫자 1점
    score += !!numberCnt ? 1 : 0;
    // 특수문자 1점
    score += !!specialCharCnt ? 1 : 0;
    // 대문자 또는 특수문자가 2개이상 1점
    score += specialCharCnt + uppercaseCnt >= 2 ? 1 : 0;

    return score;
  }
}
