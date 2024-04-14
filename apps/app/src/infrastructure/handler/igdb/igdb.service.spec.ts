import igdbConfig from "../../../constants/igdb.config";
import { IgdbService } from "./igdb.service";
import { HttpModule } from "@nestjs/axios";
import { ConfigModule } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";

describe("IgdbService", () => {
  let service: IgdbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ load: [igdbConfig] }), HttpModule],
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
