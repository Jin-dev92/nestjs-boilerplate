import { GetUsersDto } from "../../../types/interfaces";
import { IQuery } from "@nestjs/cqrs";

export class GetUsersQuery implements IQuery {
  constructor(readonly query: GetUsersDto) {}
}
