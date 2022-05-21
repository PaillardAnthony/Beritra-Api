import { Test, TestingModule } from '@nestjs/testing';
import { PlayerLifeStatsService } from './player-life-stats.service';

describe('PlayerLifeStatsService', () => {
  let service: PlayerLifeStatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerLifeStatsService],
    }).compile();

    service = module.get<PlayerLifeStatsService>(PlayerLifeStatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
