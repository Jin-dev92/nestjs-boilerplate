import { PrismaSchema, PrismaService } from "../../../../../../../prisma";
import { AuthenticationService } from "../../../../infrastructure";
import { CreateUserCommand } from "../create-user.command";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authenticationService: AuthenticationService,
  ) {}

  execute({
    body: { username, name, thumbnail, password, email },
  }: CreateUserCommand): Promise<PrismaSchema.UserCreateInput> {
    const salt = this.authenticationService.getSalt();
    const input = {
      email,
      name,
      nickname: username,
      thumbnail,
      UserAuth: {
        password: this.authenticationService.createPasswordHash(password, salt),
        salt,
      },
    } as PrismaSchema.UserCreateInput;

    return this.prismaService.user.create({ data: input });
  }
}
