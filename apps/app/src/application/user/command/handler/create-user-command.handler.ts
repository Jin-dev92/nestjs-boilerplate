import { CreateUserCommand } from "../create-user.command";
import { ICommandHandler } from "@nestjs/cqrs";

export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  execute(command: CreateUserCommand): Promise<any> {
    const {} = command;
    return Promise.resolve(undefined);
  }
}
