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
          useClass: IgdbHttpConfigFactory,
          imports: [IgdbAuthModule],
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
  it("igdb - getCharacters", async () => {
    const data = await service.getCharacters();
    console.log(data);
  });
  it("igdb - getGames", async () => {
    const data = await service.getGames();
    console.log(data);
  });
});
