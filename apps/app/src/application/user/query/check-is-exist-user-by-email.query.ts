import { IQuery } from "@nestjs/cqrs";

export class CheckIsExistUserByEmailQuery implements IQuery {
  constructor(readonly email: string) {}
}
