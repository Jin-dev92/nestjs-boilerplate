import { IQuery } from "@nestjs/cqrs";

export class CheckUserPasswordQuery implements IQuery {
  constructor(
    readonly email: string,
    readonly password: string,
  ) {}
}
