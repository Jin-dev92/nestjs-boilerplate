import { PlacesController } from "./places.controller";
import { Test, TestingModule } from "@nestjs/testing";

describe("PlacesController", () => {
  let controller: PlacesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlacesController],
    }).compile();

    controller = module.get<PlacesController>(PlacesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
