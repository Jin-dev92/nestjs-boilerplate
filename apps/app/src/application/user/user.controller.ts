import { GetUsersDto } from "../../interface";
import { UserParamDto } from "../../interface/user/user-param.dto";
import { GetUserQuery, GetUsersQuery } from "./query";
import { Controller, Get, Param, Query } from "@nestjs/common";
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
  @Get("/:userUid")
  async getUser(@Param() param: UserParamDto) {
    const { userUid } = param;
    return await this.queryBus.execute(new GetUserQuery(userUid));
  }
}
