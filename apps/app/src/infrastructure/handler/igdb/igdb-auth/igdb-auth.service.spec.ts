import { Test, TestingModule } from '@nestjs/testing';
import { IgdbAuthService } from './igdb-auth.service';

describe('IgdbAuthService', () => {
  let service: IgdbAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IgdbAuthService],
    }).compile();

    service = module.get<IgdbAuthService>(IgdbAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
