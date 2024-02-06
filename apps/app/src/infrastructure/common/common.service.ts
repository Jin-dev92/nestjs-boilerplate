import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class CommonService {
  constructor(private readonly configService: ConfigService) {}
  getServerEnvironment() {
    try {
      return this.configService.getOrThrow("SERVER_URL");
    } catch (e) {
      throw e;
    }
  }
  getClientEnvironment() {
    try {
      return this.configService.getOrThrow("CLIENT_URL");
    } catch (e) {
      throw e;
    }
  }
}
