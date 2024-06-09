import { CheckUserPasswordQuery } from "../check-user-password.query";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PrismaService } from "@prisma";

@QueryHandler(CheckUserPasswordQuery)
export class CheckUserPasswordQueryHandler
  implements IQueryHandler<CheckUserPasswordQuery>
{
  constructor(
    private readonly prismaService: PrismaService,
    // private readonly authenticationService: AuthenticationService,
  ) {}
  async execute({ email, password }: CheckUserPasswordQuery) {
    try {
      const user = this.prismaService.user.findUniqueOrThrow({
        where: {
          email,
        },
        include: {
          UserAuth: true,
        },
      });

      if (!user) {
        return false;
      }
      console.log(user);
      // const { password: passwordHash, salt } = user.UserAuth;
      // if (
      //   !this.authenticationService.verifyPassword(password, passwordHash, salt)
      // ) {
      //   return false;
      // }
      return user;
    } catch (e) {
      throw e;
    }
  }
}
