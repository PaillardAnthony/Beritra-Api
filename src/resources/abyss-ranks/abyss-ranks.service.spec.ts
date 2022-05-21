import { Test, TestingModule } from '@nestjs/testing';
import { AbyssRanksService } from './abyss-ranks.service';

describe('AbyssRanksService', () => {
  let service: AbyssRanksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbyssRanksService],
    }).compile();

    service = module.get<AbyssRanksService>(AbyssRanksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
