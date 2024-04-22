import { IgdbOauth2Response } from "../../../../types";
import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AxiosError } from "axios";
import { catchError, firstValueFrom } from "rxjs";

@Injectable()
export class IgdbAuthService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getAccessToken() {
    if (await this.isExistCachedAccessToken()) {
      return; // redis 에서 access token 을 가져옵니다.
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

  private async isExistCachedAccessToken() {
    // redis 혹은 다른 kv store 에서 accessToken 을 가져옵니다. (비용 문제로 인해 사용하지 않을 예정입니다.)
    try {
      // redis 에 저장된 access token 이 있는지 확인합니다.
      return false;
    } catch (e) {
      throw e;
    }
  }
}
