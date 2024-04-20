import { IgdbOauth2Response } from "../../../../types";
import {
  HttpModuleOptions,
  HttpModuleOptionsFactory,
  HttpService,
} from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AxiosError } from "axios";
import * as console from "node:console";
import { catchError, firstValueFrom } from "rxjs";

@Injectable()
export class IgdbHttpConfigFactory implements HttpModuleOptionsFactory {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}
  async createHttpOptions(): Promise<HttpModuleOptions> {
    const { access_token, expires_in } = await this.getAccessToken();
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

  private async isExistCachedAccessToken() {
    // redis 혹은 다른 kv store 에서 accessToken 을 가져옵니다. (비용 문제로 인해 사용하지 않을 예정입니다.)
    try {
      // redis 에 저장된 access token 이 있는지 확인합니다.
      return false;
    } catch (e) {
      throw e;
    }
  }

  private async getAccessToken() {
    if (await this.isExistCachedAccessToken()) {
      return;
    }
    const response = this.httpService.post<IgdbOauth2Response>(
      "https://id.twitch.tv/oauth2/token",
      {
        client_id: this.configService.get<string>("IGDB_CLIENT_ID"),
        client_secret: this.configService.get<string>("IGDB_CLIENT_SECRET"),
        grant_type: "client_credentials",
      },
    );
    const { data } = await firstValueFrom(
      response.pipe(
        catchError((err: AxiosError) => {
          console.log(err);
          throw err;
        }),
      ),
    );
    return data;
  }
}
