import { PlacesService } from "./places.service";
import { Test, TestingModule } from "@nestjs/testing";

describe("PlacesService", () => {
  let service: PlacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlacesService],
    }).compile();

    service = module.get<PlacesService>(PlacesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
