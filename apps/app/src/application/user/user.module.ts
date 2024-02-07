import { AuthenticationModule } from "../../infrastructure";
import {
  CheckIsExistUserByEmailQueryHandler,
  GetUserQueryHandler,
  GetUsersQueryHandler,
} from "./query";
import { UserController } from "./user.controller";
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
    UserService,
    CheckIsExistUserByEmailQueryHandler,
  ],
})
export class UserModule {}
