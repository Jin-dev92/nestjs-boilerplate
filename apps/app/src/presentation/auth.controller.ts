import { AuthService } from "../application";
import { LoginDto } from "../types";
import { Body, Controller, Post } from "@nestjs/common";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post("/login")
  async login(@Body() dto: LoginDto) {
    await this.authService.login(dto);
  }
  @Post("/logout")
  async logOut() {}
}
