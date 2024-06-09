import {
  AuthenticationModule,
  AuthenticationService,
} from "../../infrastructure";
import { UserController } from "../../presentation";
import {
  CheckIsExistUserByEmailQueryHandler,
  GetUserQueryHandler,
  GetUsersQueryHandler,
} from "./query";
import { CheckUserPasswordQueryHandler } from "./query/handler/check-user-password.query.handler";
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
    CheckUserPasswordQueryHandler,
    UserService,
    AuthenticationService,
  ],
  exports: [UserService],
})
export class UserModule {}
