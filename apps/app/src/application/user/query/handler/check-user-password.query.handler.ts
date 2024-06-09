import { AuthenticationService } from "../../../../infrastructure";
import { CheckUserPasswordQuery } from "../check-user-password.query";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PrismaService } from "@prisma";

@QueryHandler(CheckUserPasswordQuery)
export class CheckUserPasswordQueryHandler
  implements IQueryHandler<CheckUserPasswordQuery>
{
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authenticationService: AuthenticationService,
  ) {}
  async execute({ email, password }: CheckUserPasswordQuery) {
    try {
      const user = this.prismaService.user.findUniqueOrThrow({
        where: {
          email,
        },
        include: {
          userAuth: true,
        },
      });

      if (!user) {
        return false;
      }
      if (
        !this.authenticationService.verifyPassword(
          password,
          user.userAuth.password,
          user.userAuth.salt,
        )
      ) {
        return false;
      }
      return user;
    } catch (e) {
      throw e;
    }
  }
}
