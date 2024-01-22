import { GetUsersQueryHandler } from "./query";
import { UserController } from "./user.controller";
import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { PrismaModule } from "@prisma";

@Module({
  imports: [CqrsModule, PrismaModule],
  controllers: [UserController],
  providers: [GetUsersQueryHandler],
})
export class UserModule {}
