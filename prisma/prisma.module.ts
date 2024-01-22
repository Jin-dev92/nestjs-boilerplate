import { PrismaService } from "./prisma.service";
import { Global, Module } from "@nestjs/common";

@Global()
@Module({
  providers: [PrismaService],
})
export class PrismaModule {}
