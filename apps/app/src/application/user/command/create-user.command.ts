import { CreateUserDto } from "../../../types/interface";
import { ICommand } from "@nestjs/cqrs";

export class CreateUserCommand implements ICommand {
  constructor(readonly body: CreateUserDto) {}
}
