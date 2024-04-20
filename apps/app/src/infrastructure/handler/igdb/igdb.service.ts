import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AxiosError } from "axios";
import { catchError, firstValueFrom } from "rxjs";

@Injectable()
export class IgdbService {
  constructor(private readonly httpService: HttpService) {}

  async getCharacters() {
    const response = this.httpService.post("/characters", {
      body: "fields akas,checksum,country_name,created_at,description,games,gender,mug_shot,name,slug,species,updated_at,url;",
    });
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
