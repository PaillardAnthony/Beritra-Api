import { Test, TestingModule } from '@nestjs/testing';
import { LegionEmblemsService } from './legion-emblems.service';

describe('LegionEmblemsService', () => {
  let service: LegionEmblemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LegionEmblemsService],
    }).compile();

    service = module.get<LegionEmblemsService>(LegionEmblemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
