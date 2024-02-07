import { CreateUserCommand } from "../create-user.command";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaSchema, PrismaService } from "@prisma";

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(private readonly prismaService: PrismaService) {}
  execute({
    body: { username, name, thumbnail, password, email },
  }: CreateUserCommand): Promise<PrismaSchema.UserCreateInput> {
    const input = {
      username,
      name,
      thumbnail,
      password,
      email,
    } as PrismaSchema.UserCreateInput;
    return this.prismaService.user.create({ data: input });
  }
}
