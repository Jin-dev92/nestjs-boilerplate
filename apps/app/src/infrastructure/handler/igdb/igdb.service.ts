import { GetCharacterFields, GetGamesField } from "./fields";
import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AxiosError } from "axios";
import { catchError, firstValueFrom } from "rxjs";

@Injectable()
export class IgdbService {
  constructor(private readonly httpService: HttpService) {
    this.httpService.axiosRef.interceptors.request.use(
      (config) => {
        config.data = config.data
          ? `fields ${config.data.join(",")};`
          : "fields *;";
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }

  async getCharacters(fields?: (keyof GetCharacterFields)[]) {
    const response = this.httpService.post<GetCharacterFields[]>(
      "/characters",
      fields,
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
  async getGames(fields?: (keyof GetGamesField)[]) {
    const response = this.httpService.post<GetGamesField[]>("/games", fields);
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
