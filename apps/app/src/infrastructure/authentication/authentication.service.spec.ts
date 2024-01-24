import { AuthenticationService } from "./authentication.service";
import { Test, TestingModule } from "@nestjs/testing";

describe("AuthenticationService", () => {
  let service: AuthenticationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthenticationService],
    }).compile();

    service = module.get<AuthenticationService>(AuthenticationService);
  });

  it("AuthenticationService should be defined", () => {
    expect(service).toBeDefined();
  });
});
