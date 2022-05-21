import { Test, TestingModule } from '@nestjs/testing';
import { PlayerLifeStatsController } from './player-life-stats.controller';
import { PlayerLifeStatsService } from './player-life-stats.service';

describe('PlayerLifeStatsController', () => {
  let controller: PlayerLifeStatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerLifeStatsController],
      providers: [PlayerLifeStatsService],
    }).compile();

    controller = module.get<PlayerLifeStatsController>(PlayerLifeStatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
