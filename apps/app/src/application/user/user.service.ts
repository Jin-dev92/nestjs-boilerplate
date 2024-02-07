import { AuthenticationService } from "../../infrastructure";
import { CreateUserDto, GetUsersDto } from "../../interface";
import { CreateUserCommand } from "./command";
import { GetUserQuery, GetUsersQuery } from "./query";
import { BadRequestException, Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { PrismaService } from "@prisma";

@Injectable()
export class UserService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly authenticationService: AuthenticationService,
    private readonly prismaService: PrismaService,
  ) {}

  async getUsersExecute(dto: GetUsersDto) {
    return await this.queryBus.execute(new GetUsersQuery(dto));
  }
  async getUserExecute(userid: number) {
    return await this.queryBus.execute(new GetUserQuery(userid));
  }
  async createUserExecute(dto: CreateUserDto) {
    const { password, email } = dto;
    await this.checkIsExistUserEmail(email);
    const salt = this.authenticationService.getSalt();
    const input = {
      ...dto,
      password: this.authenticationService.createPasswordHash(password, salt),
    } as CreateUserDto;
    return await this.commandBus.execute(new CreateUserCommand(input));
  }
  async deleteUserExecute() {}
  private async checkIsExistUserEmail(email: string) {
    try {
      await this.prismaService.user.findUniqueOrThrow({
        where: {
          email,
        },
      });
    } catch (e) {
      // @Todo 커스텀 에러로 변경해줘야함
      throw BadRequestException;
    }
  }
}
