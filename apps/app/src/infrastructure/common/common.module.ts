import { EnvironmentConfigModule } from "../config";
import { CommonService } from "./common.service";
import { Global, Module } from "@nestjs/common";

@Global()
@Module({
  imports: [EnvironmentConfigModule],
  exports: [CommonService],
  providers: [CommonService],
})
export class CommonModule {}
