import { AuthenticationModule } from "../../infrastructure";
import { UserController } from "../../presentation";
import {
  CheckIsExistUserByEmailQueryHandler,
  GetUserQueryHandler,
  GetUsersQueryHandler,
} from "./query";
import { UserService } from "./user.service";
import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { PrismaModule } from "@prisma";

@Module({
  imports: [CqrsModule, PrismaModule, AuthenticationModule],
  controllers: [UserController],
  providers: [
    GetUsersQueryHandler,
    GetUserQueryHandler,
    CheckIsExistUserByEmailQueryHandler,
    UserService,
  ],
})
export class UserModule {}
