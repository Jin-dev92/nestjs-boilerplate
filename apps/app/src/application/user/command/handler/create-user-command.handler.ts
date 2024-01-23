import { CreateUserCommand } from "../create-user.command";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "@prisma";

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(private readonly prismaService: PrismaService) {}
  execute({ body }: CreateUserCommand): Promise<any> {
    this.prismaService.user.create({ data: body });
    return;
  }
}
