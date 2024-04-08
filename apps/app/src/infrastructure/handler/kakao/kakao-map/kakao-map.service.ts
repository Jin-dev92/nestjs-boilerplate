import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";

@Injectable()
export class KakaoMapService {
  constructor(private readonly httpService: HttpService) {}
  async getFamousPlace(latitude: number, longitude: number) {}
}
