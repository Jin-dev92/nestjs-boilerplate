import { IgdbService } from "./igdb.service";
import { Test, TestingModule } from "@nestjs/testing";

describe("IgdbService", () => {
  let service: IgdbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IgdbService],
    }).compile();

    service = module.get<IgdbService>(IgdbService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
