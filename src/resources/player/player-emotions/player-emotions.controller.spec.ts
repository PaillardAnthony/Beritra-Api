import { Test, TestingModule } from '@nestjs/testing';
import { PlayerEmotionsController } from './player-emotions.controller';
import { PlayerEmotionsService } from './player-emotions.service';

describe('PlayerEmotionsController', () => {
  let controller: PlayerEmotionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerEmotionsController],
      providers: [PlayerEmotionsService],
    }).compile();

    controller = module.get<PlayerEmotionsController>(PlayerEmotionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
