import { Test, TestingModule } from '@nestjs/testing';
import { PlayerGameStatsController } from './player-game-stats.controller';
import { PlayerGameStatsService } from './player-game-stats.service';

describe('PlayerGameStatsController', () => {
  let controller: PlayerGameStatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerGameStatsController],
      providers: [PlayerGameStatsService],
    }).compile();

    controller = module.get<PlayerGameStatsController>(PlayerGameStatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
