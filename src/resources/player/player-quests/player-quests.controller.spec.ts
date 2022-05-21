import { Test, TestingModule } from '@nestjs/testing';
import { PlayerQuestsController } from './player-quests.controller';
import { PlayerQuestsService } from './player-quests.service';

describe('PlayerQuestsController', () => {
  let controller: PlayerQuestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerQuestsController],
      providers: [PlayerQuestsService],
    }).compile();

    controller = module.get<PlayerQuestsController>(PlayerQuestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
