import { Test, TestingModule } from '@nestjs/testing';
import { LegionsService } from './legions.service';

describe('LegionsService', () => {
  let service: LegionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LegionsService],
    }).compile();

    service = module.get<LegionsService>(LegionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
