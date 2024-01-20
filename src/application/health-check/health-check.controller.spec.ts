import { HealthCheckController } from "./health-check.controller";
import { HealthCheckService } from "@nestjs/terminus";
import { Test, TestingModule } from "@nestjs/testing";

describe("HealthCheckController", () => {
  let controller: HealthCheckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthCheckController],
      providers: [HealthCheckService],
    }).compile();

    controller = module.get<HealthCheckController>(HealthCheckController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
