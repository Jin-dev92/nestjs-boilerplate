import { GetUserQuery } from "../get-user.query";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PrismaService } from "@prisma";

@QueryHandler(GetUserQuery)
export class GetUserQueryHandler implements IQueryHandler<GetUserQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ userUid }: GetUserQuery) {
    return this.prisma.user.findUniqueOrThrow({
      where: {
        uid: userUid,
      },
    });
  }
}
