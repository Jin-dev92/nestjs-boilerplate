import { PrismaModule } from "../../../../prisma";
import {
  CheckIsExistUserByEmailQueryHandler,
  CheckUserPasswordQueryHandler,
  CreateUserCommandHandler,
  GetUserQueryHandler,
  GetUsersQueryHandler,
  UserService,
} from "../application";
import { AuthenticationModule } from "../infrastructure";
import { UserController } from "./user.controller";
import { CqrsModule } from "@nestjs/cqrs";
import { Test, TestingModule } from "@nestjs/testing";

describe("UserController", () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule, PrismaModule, AuthenticationModule],
      controllers: [UserController],
      providers: [
        UserService,
        GetUsersQueryHandler,
        CheckIsExistUserByEmailQueryHandler,
        CheckUserPasswordQueryHandler,
        GetUserQueryHandler,
        CreateUserCommandHandler,
      ],
      exports: [UserService],
    }).compile();
    controller = module.get<UserController>(UserController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
    // controller.getUsers({ page: 1, count: 10 });
  });
});
