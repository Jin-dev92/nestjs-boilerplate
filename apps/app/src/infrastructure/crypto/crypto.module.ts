import { CryptoService } from "./crypto.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [CryptoService],
  exports: [CryptoModule],
})
export class CryptoModule {}
