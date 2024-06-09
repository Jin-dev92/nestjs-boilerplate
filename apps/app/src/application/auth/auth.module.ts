import { JwtStrategy, LocalStrategy } from "../../infrastructure";
import { AuthController } from "../../presentation";
import { UserModule } from "../user";
import { AuthService } from "./auth.service";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PrismaModule } from "@prisma";

@Module({
  imports: [
    UserModule,
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: "1d" },
    }),
    // PassportModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
