import { AuthenticationService } from "../../infrastructure";
import { CreateUserDto, GetUsersDto } from "../../types/interfaces";
import { CreateUserCommand } from "./commands";
import {
  CheckIsExistUserByEmailQuery,
  CheckUserPasswordQuery,
  GetUserQuery,
  GetUsersQuery,
} from "./query";
import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";

@Injectable()
export class UserService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly authenticationService: AuthenticationService,
  ) {}

  async getUsersExecute(dto: GetUsersDto) {
    return await this.queryBus.execute(new GetUsersQuery(dto));
  }
  async getUserExecute(userid: number) {
    return await this.queryBus.execute(new GetUserQuery(userid));
  }
  async checkUserPasswordExecute(email: string, password: string) {
    return await this.queryBus.execute(
      new CheckUserPasswordQuery(email, password),
    );
  }
  async createUserExecute(dto: CreateUserDto) {
    const { password, email } = dto;
    await this.queryBus.execute(new CheckIsExistUserByEmailQuery(email));
    const salt = this.authenticationService.getSalt();
    const input = {
      ...dto,
      password: this.authenticationService.createPasswordHash(password, salt),
    } as CreateUserDto;
    return await this.commandBus.execute(new CreateUserCommand(input));
  }
  async deleteUserExecute() {}
}
