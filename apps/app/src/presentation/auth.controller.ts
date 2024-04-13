import { AuthService } from "../application/auth/auth.service";
import { LoginDto } from "../types/interfaces";
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
