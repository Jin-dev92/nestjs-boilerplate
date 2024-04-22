import { IgdbHttpConfigFactory } from "./factory";
import { IgdbAuthModule } from "./igdb-auth";
import { IgdbService } from "./igdb.service";
import { HttpModule } from "@nestjs/axios";
import { Test, TestingModule } from "@nestjs/testing";

describe("IgdbService", () => {
  let service: IgdbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          imports: [IgdbAuthModule],
          useClass: IgdbHttpConfigFactory,
        }),
        IgdbAuthModule,
      ],
      providers: [IgdbService],
    }).compile();

    service = module.get<IgdbService>(IgdbService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
  it("getCharacters Test", async () => {
    const data = await service.getCharacters();
    // expect(service).toBeDefined();
    console.log(data);
  });
});
