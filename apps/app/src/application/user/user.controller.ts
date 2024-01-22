import { GetUsersDto } from "../../interface/user/get-users.dto";
import { GetUsersQuery } from "./query";
import { Controller, Get, Query } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";

@Controller("user")
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}
  @Get("/")
  async getUsers(@Query() query: GetUsersDto) {
    return await this.queryBus.execute(new GetUsersQuery(query));
  }
}
