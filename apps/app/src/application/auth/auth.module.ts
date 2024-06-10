import { PrismaModule } from "../../../../../prisma";
import { AuthController } from "../../presentation";
import { UserModule } from "../user";
import { AuthService } from "./auth.service";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    UserModule,
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: "1d" },
    }),
  ],
  controllers: [AuthController],
  // providers: [AuthService, JwtStrategy, LocalStrategy],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
