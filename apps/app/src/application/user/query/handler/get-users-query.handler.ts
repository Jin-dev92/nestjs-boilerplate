import { GetUsersQuery } from "../get-users.query";
import { IQueryHandler } from "@nestjs/cqrs";

export class GetUsersQueryHandler implements IQueryHandler<GetUsersQuery> {
  execute(query: GetUsersQuery): Promise<any> {
    const {} = query;
    return Promise.resolve(undefined);
  }
}
