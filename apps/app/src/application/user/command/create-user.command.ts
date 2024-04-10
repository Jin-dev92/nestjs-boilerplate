import { CreateUserDto } from "../../../types/interfaces";
import { ICommand } from "@nestjs/cqrs";

export class CreateUserCommand implements ICommand {
  constructor(readonly body: CreateUserDto) {}
}
