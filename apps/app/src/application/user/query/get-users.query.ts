import { GetUsersDto } from "../../../interface";
import { IQuery } from "@nestjs/cqrs";

export class GetUsersQuery implements IQuery {
  constructor(readonly query: GetUsersDto) {}
}
