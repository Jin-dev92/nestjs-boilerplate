import { IgdbOauth2Response } from "../../../types";
import { IgdbService } from "./igdb.service";
import { HttpModule, HttpService } from "@nestjs/axios";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import { AxiosError } from "axios";
import { catchError, firstValueFrom } from "rxjs";

describe("IgdbService", () => {
  let service: IgdbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          imports: [ConfigModule, HttpModule],
          useFactory: async (
            configService: ConfigService,
            httpService: HttpService,
          ) => {
            const response = httpService.post<IgdbOauth2Response>(
              "https://id.twitch.tv/oauth2/token",
              {
                client_id: configService.get<string>("IGDB_CLIENT_ID"),
                client_secret: configService.get<string>("IGDB_CLIENT_SECRET"),
                grant_type: "client_credentials",
              },
            );
            const { data: oauth } = await firstValueFrom(
              response.pipe(
                catchError((err: AxiosError) => {
                  console.log(err);
                  throw err;
                }),
              ),
            );
            return {
              baseURL: "https://api.igdb.com/v4",
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${oauth.access_token}`,
                "Client-ID": configService.get<string>("IGDB_CLIENT_ID"),
              },
            };
          },
          inject: [ConfigService, HttpService],
        }),
        // ConfigModule.forRoot({
        //   load: [igdbConfig],
        // }),
      ],
      providers: [IgdbService],
    }).compile();

    service = module.get<IgdbService>(IgdbService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
  it("getCharacters Test", async () => {
    const data = await service.getCharacters();
    // expect(service).toBeDefined();
    console.log(data);
  });
});
