import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class UserRepository {
  constructor(private readonly user: PrismaClient["user"]) {}
}
