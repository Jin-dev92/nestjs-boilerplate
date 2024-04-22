import { LoggerHandler } from "./logger.handler";
import { Test, TestingModule } from "@nestjs/testing";

describe("LoggerService", () => {
  let service: LoggerHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggerHandler],
    }).compile();

    service = module.get<LoggerHandler>(LoggerHandler);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
