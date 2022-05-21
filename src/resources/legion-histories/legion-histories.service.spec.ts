import { Test, TestingModule } from '@nestjs/testing';
import { LegionHistoriesService } from './legion-histories.service';

describe('LegionHistoriesService', () => {
  let service: LegionHistoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LegionHistoriesService],
    }).compile();

    service = module.get<LegionHistoriesService>(LegionHistoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
