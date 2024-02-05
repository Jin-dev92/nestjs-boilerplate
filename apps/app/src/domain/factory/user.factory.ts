import { EventBus } from "@nestjs/cqrs";
import { PrismaModel, PrismaService } from "@prisma";

export class UserFactory {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly eventBus: EventBus,
  ) {}

  async createUser(option: PrismaModel.UserCreateInput) {
    return this.eventBus.publish();
  }
}
