import IgdbConfig from "../../../../constants/igdb.config";
import { IgdbAuthService } from "./igdb-auth.service";
import { HttpModule } from "@nestjs/axios";
import { ConfigModule } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";

describe("IgdbAuthService", () => {
  let service: IgdbAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule,
        ConfigModule.forRoot({
          load: [IgdbConfig],
        }),
      ],
      providers: [IgdbAuthService],
    }).compile();

    service = module.get<IgdbAuthService>(IgdbAuthService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
  it("IGDB_Auth >> getAccessToken", async () => {
    const result = await service.getAccessToken();
    console.log(result);
  });
});
