import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { PrismaService } from "@prisma";

@Injectable()
export class LocalStrategy extends AuthGuard("local") {
  constructor(private readonly prismaService: PrismaService) {
    super();
  }
}
