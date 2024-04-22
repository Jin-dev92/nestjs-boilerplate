import { IgdbAuthService } from "../igdb-auth/igdb-auth.service";
import { HttpModuleOptions, HttpModuleOptionsFactory } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class IgdbHttpConfigFactory implements HttpModuleOptionsFactory {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: IgdbAuthService,
  ) {}
  async createHttpOptions(): Promise<HttpModuleOptions> {
    const { access_token, expires_in } =
      await this.authService.getAccessToken();
    // redis access token 생성 방법이 더 좋다. 본 포트롤리오 에서는 따로 사용하지 않을 예정입니다. (비용 문제)
    return {
      baseURL: "https://api.igdb.com/v4",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${access_token}`,
        "Client-ID": this.configService.get<string>("IGDB_CLIENT_ID"),
      },
    };
  }
}
