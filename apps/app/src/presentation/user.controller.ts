import { UserService } from "../application";
import { CreateUserDto, GetUsersDto, UserParamDto } from "../types";
import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/")
  async getUsers(@Query() query: GetUsersDto) {
    await this.userService.getUsersExecute(query);
  }

  @Get("/:userId")
  async getUser(@Param() param: UserParamDto) {
    const { userid } = param;
    await this.userService.getUserExecute(userid);
  }

  @Post("/")
  async createUser(@Body() body: CreateUserDto) {
    await this.userService.createUserExecute(body);
  }
}
