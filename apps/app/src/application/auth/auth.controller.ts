import { LoginDto } from "../../types/interfaces";
import { AuthService } from "./auth.service";
import { Body, Controller, Post } from "@nestjs/common";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post()
  async login(@Body() dto: LoginDto) {
    await this.authService.login();
  }
  @Post()
  async logOut() {}
}
