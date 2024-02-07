import { CreateUserDto, GetUsersDto } from "../../interface";
import { CreateUserCommand } from "./command";
import { GetUserQuery, GetUsersQuery } from "./query";
import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";

@Injectable()
export class UserService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async getUsersExecute(dto: GetUsersDto) {
    return await this.queryBus.execute(new GetUsersQuery(dto));
  }
  async getUserExecute(userid: number) {
    return await this.queryBus.execute(new GetUserQuery(userid));
  }
  async createUserExecute(dto: CreateUserDto) {
    return await this.commandBus.execute(new CreateUserCommand(dto));
  }
  async deleteUserExecute() {}
}
