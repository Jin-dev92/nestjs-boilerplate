import { AuthenticationModule } from "../../infrastructure";
import { UserController } from "../../presentation";
import { UserService } from "./user.service";
import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { PrismaModule } from "@prisma";

@Module({
  imports: [CqrsModule, PrismaModule, AuthenticationModule],
  controllers: [UserController],
  providers: [
    // GetUsersQueryHandler,
    // GetUserQueryHandler,
    // CheckIsExistUserByEmailQueryHandler,
    // CheckUserPasswordQueryHandler,
    UserService,
  ],
  exports: [UserService],
})
export class UserModule {}
