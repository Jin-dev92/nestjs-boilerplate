import { CheckIsExistUserByEmailQuery } from "../check-is-exist-user-by-email.query";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PrismaService } from "@prisma";

@QueryHandler(CheckIsExistUserByEmailQuery)
export class CheckIsExistUserByEmailQueryHandler
  implements IQueryHandler<CheckIsExistUserByEmailQuery>
{
  constructor(private readonly prisma: PrismaService) {}

  async execute({ email }: CheckIsExistUserByEmailQuery) {
    try {
      return this.prisma.user.findUniqueOrThrow({
        where: {
          email,
        },
      });
    } catch (e) {
      throw e;
    }
  }
}
