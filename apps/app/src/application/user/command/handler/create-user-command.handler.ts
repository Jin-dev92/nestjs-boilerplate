import { CreateUserCommand } from "../create-user.command";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaModel, PrismaService } from "@prisma";

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(private readonly prismaService: PrismaService) {}
  execute({ body }: CreateUserCommand): Promise<any> {
    const input = {} as PrismaModel.UserCreateInput;
    this.prismaService.user.create({ data: input });
    return;
  }
}
