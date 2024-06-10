import { PrismaService } from "../../../../../../../prisma";
import { GetUsersQuery } from "../get-users.query";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";

@QueryHandler(GetUsersQuery)
export class GetUsersQueryHandler implements IQueryHandler<GetUsersQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ query }: GetUsersQuery) {
    const { page, count } = query;
    return this.prisma.user.findMany({
      skip: count * page,
      take: count,
    });
  }
}
