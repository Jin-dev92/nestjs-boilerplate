import { CryptoModule, CryptoService } from "../crypto";
import { AuthenticationService } from "./authentication.service";
import { Module } from "@nestjs/common";

@Module({
  imports: [CryptoModule],
  providers: [AuthenticationService, CryptoService],
  exports: [AuthenticationService, CryptoService],
})
export class AuthenticationModule {}
