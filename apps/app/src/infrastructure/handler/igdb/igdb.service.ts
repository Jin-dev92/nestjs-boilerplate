import { GetCharacterFields, GetGamesField } from "./fields";
import { HttpService } from "@nestjs/axios";
import { Inject, Injectable } from "@nestjs/common";
import { AxiosError } from "axios";
import { WINSTON_MODULE_NEST_PROVIDER } from "nest-winston";
import { catchError, firstValueFrom } from "rxjs";
import { Logger } from "winston";

@Injectable()
export class IgdbService {
  constructor(
    private readonly httpService: HttpService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: Logger,
  ) {
    this.httpService.axiosRef.interceptors.request.use(
      (config) => {
        config.data = config.data
          ? `fields ${config.data.join(",")};`
          : "fields *;";
        return config;
      },
      (error) => {
        this.logger.error(error);
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
          this.logger.error(err);
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
          this.logger.error(err);
          throw err;
        }),
      ),
    );
    return data;
  }
}
