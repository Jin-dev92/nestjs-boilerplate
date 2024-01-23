import { CreateUserDto } from "../../../types";
import { ICommand } from "@nestjs/cqrs";

export class CreateUserCommand implements ICommand {
  constructor(readonly body: CreateUserDto) {}
}
