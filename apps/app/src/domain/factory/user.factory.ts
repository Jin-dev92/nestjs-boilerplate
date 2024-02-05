import { EventPublisher } from "@nestjs/cqrs";
import { PrismaModel, PrismaService } from "@prisma";

export class UserFactory {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async createUser(option: PrismaModel.UserCreateInput) {
    return this.eventPublisher.mergeObjectContext(
      await this.prismaService.user.create({ data: option }),
    );
  }
}
