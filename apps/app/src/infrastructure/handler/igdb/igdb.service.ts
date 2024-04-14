import { IgdbOauth2Response } from "../../../types";
import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { firstValueFrom } from "rxjs";

@Injectable()
export class IgdbService {
  private accessToken: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.getAccessToken().then((data) => {
      this.accessToken = data.access_token;
    });
  }

  private async getAccessToken() {
    const response = this.httpService.post<IgdbOauth2Response>(
      "https://id.twitch.tv/oauth2/token",
      {
        client_id: this.configService.get<string>("IGDB_CLIENT_ID"),
        client_secret: this.configService.get<string>("IGDB_CLIENT_SECRET"),
        grant_type: this.configService.get<string>("IGDB_GRANT_TYPE"),
      },
    );
    const { data } = await firstValueFrom(response);
    return data;
  }
}
