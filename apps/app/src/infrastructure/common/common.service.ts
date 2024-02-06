import { Injectable } from "@nestjs/common";

@Injectable()
export class CommonService {
  getServerEnvironment() {
    return process.env.SERVER_URL;
  }
  getClientEnvironment() {
    return process.env.CLIENT_URL;
  }
}
