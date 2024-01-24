import { Injectable } from "@nestjs/common";
import crypto, { X509Certificate } from "crypto";

@Injectable()
export class CryptoService {
  crypt(
    str: string,
    algorithm: "aes-256-cbc",
    key: string | Buffer,
    iv: string | Buffer,
  ) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let result = cipher.update(str, "utf8", "base64");
    result += cipher.final("base64");

    return result;
  }

  decrpyt(
    str: string,
    algorithm: "aes-256-cbc",
    key: string | Buffer,
    iv: string | Buffer,
  ) {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let result = decipher.update(str, "base64", "utf8");
    result += decipher.final("utf8");

    return result;
  }

  hashPassword(password: string, salt: string, repeat: number, length: number) {
    const passwordBuffer = crypto.pbkdf2Sync(
      password,
      salt,
      repeat,
      length,
      "sha512",
    );
    // hex코드로 주기때문에 암호화된 길이 * 2 가됨
    // 현재는 암호화길이 64 * 2 => 128자의 암호화된 비밀번호 생성
    return passwordBuffer.toString("hex");
  }

  verifyX5c(x5c: string[], cert: Buffer) {
    let isVerified = false;
    const x5cCertificates: X509Certificate[] = x5c.map(
      (header: string) => new X509Certificate(Buffer.from(header, "base64")),
    );

    const rootCert = new X509Certificate(cert);

    const checkIssued = rootCert.checkIssued(
      x5cCertificates[x5cCertificates.length - 1],
    );

    if (!checkIssued) isVerified = false;

    x5cCertificates.push(rootCert);

    const verifierStatuses = x5cCertificates.map(
      (x590: X509Certificate, index: number) => {
        if (index >= x5cCertificates.length - 1) return true;

        return x590.verify(x5cCertificates[index + 1].publicKey);
      },
    );

    if (verifierStatuses.includes(false)) {
      isVerified = false;
    }

    return {
      isVerified,
      publicKey: x5cCertificates[0].publicKey,
    };
  }

  generateSalt() {
    return crypto.randomBytes(16).toString("hex");
  }
}
