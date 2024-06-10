import { PrismaService } from "../../../../../../../prisma";
import { GetUserQuery } from "../get-user.query";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";

@QueryHandler(GetUserQuery)
export class GetUserQueryHandler implements IQueryHandler<GetUserQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ id }: GetUserQuery) {
    try {
      return this.prisma.user.findUniqueOrThrow({
        where: {
          id: id,
        },
      });
    } catch (e) {
      throw e;
    }
  }
}
