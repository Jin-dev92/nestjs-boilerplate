import { AuthenticationModule } from "../../infrastructure";
import { GetUserQueryHandler, GetUsersQueryHandler } from "./query";
import { UserController } from "./user.controller";
import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { PrismaModule } from "@prisma";
import { UserService } from './user.service';

@Module({
  imports: [CqrsModule, PrismaModule, AuthenticationModule],
  controllers: [UserController],
  providers: [GetUsersQueryHandler, GetUserQueryHandler, UserService],
})
export class UserModule {}
