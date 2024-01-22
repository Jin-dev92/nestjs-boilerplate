import { GetUsersQuery } from "../get-users.query";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";

@QueryHandler(GetUsersQuery)
export class GetUsersQueryHandler implements IQueryHandler<GetUsersQuery> {
  execute(query: GetUsersQuery): Promise<any> {
    const {} = query;
    return Promise.resolve(undefined);
  }
}
