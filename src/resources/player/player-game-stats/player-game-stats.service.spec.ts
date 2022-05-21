import { Test, TestingModule } from '@nestjs/testing';
import { PlayerGameStatsService } from './player-game-stats.service';

describe('PlayerGameStatsService', () => {
  let service: PlayerGameStatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerGameStatsService],
    }).compile();

    service = module.get<PlayerGameStatsService>(PlayerGameStatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
