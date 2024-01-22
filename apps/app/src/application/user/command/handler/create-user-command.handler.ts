import { CreateUserCommand } from "../create-user.command";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  execute(command: CreateUserCommand): Promise<any> {
    const {} = command;
    return Promise.resolve(undefined);
  }
}
