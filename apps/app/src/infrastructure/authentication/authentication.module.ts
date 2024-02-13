import { CryptoModule } from "../crypto";
import { AuthenticationService } from "./authentication.service";
import { Module } from "@nestjs/common";

@Module({
  imports: [CryptoModule],
  providers: [AuthenticationService],
  exports: [AuthenticationModule, AuthenticationService],
})
export class AuthenticationModule {}
