import { GetUsersDto } from "../../../interface/user/get-users.dto";
import { IQuery } from "@nestjs/cqrs";

export class GetUsersQuery implements IQuery {
  constructor(readonly query: GetUsersDto) {}
}
