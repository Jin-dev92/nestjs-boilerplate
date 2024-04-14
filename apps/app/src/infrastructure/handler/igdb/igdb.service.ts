import { IgdbOauth2Response } from "../../../types";
import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AxiosError } from "axios";
import { catchError, firstValueFrom } from "rxjs";

@Injectable()
export class IgdbService {
  private accessToken: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    if (!this.accessToken) {
      // kvStore 로 토큰 정보를 캐싱해두는 방법이 더 좋음.
      // 해당 포트폴리오에서는 다루지 않음.
      this.httpService.axiosRef.interceptors.request.use(async (config) => {
        const { access_token } = await this.getAccessToken();
        this.accessToken = access_token;
        this.httpService.axiosRef.defaults.headers.common = {
          Authorization: `Bearer ${access_token}`,
          "Client-ID": this.configService.get<string>("IGDB_CLIENT_ID"),
          Accept: "application/json",
        };
        return config;
      });
    }
  }

  async getCharacters() {
    // await this.setHeaders();
    const response = this.httpService.post(
      "https://api.igdb.com/v4/characters",
      {
        body: "fields akas,checksum,country_name,created_at,description,games,gender,mug_shot,name,slug,species,updated_at,url;",
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
  private async getAccessToken() {
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
