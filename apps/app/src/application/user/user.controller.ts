import {
  CreateUserDto,
  GetUsersDto,
  UserParamDto,
} from "../../types/interface";
import { CreateUserCommand } from "./command";
import { GetUserQuery, GetUsersQuery } from "./query";
import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";

@Controller("users")
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}
  @Get("/")
  async getUsers(@Query() query: GetUsersDto) {
    return await this.queryBus.execute(new GetUsersQuery(query));
  }
  @Get("/:userId")
  async getUser(@Param() param: UserParamDto) {
    const { userid } = param;
    return await this.queryBus.execute(new GetUserQuery(userid));
  }
  @Post("/")
  async createUser(@Body() body: CreateUserDto) {
    return await this.commandBus.execute(new CreateUserCommand(body));
  }
}
