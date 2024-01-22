import { HealthCheckController } from "./health-check.controller";
import { Test, TestingModule } from "@nestjs/testing";

describe("HealthCheckController", () => {
  let controller: HealthCheckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthCheckController],
    }).compile();

    controller = module.get<HealthCheckController>(HealthCheckController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
