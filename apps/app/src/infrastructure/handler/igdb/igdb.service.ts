import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";

@Injectable()
export class IgdbService {
  constructor(private readonly httpService: HttpService) {}
}
