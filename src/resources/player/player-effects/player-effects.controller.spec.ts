import { Test, TestingModule } from '@nestjs/testing';
import { PlayerEffectsController } from './player-effects.controller';
import { PlayerEffectsService } from './player-effects.service';

describe('PlayerEffectsController', () => {
  let controller: PlayerEffectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerEffectsController],
      providers: [PlayerEffectsService],
    }).compile();

    controller = module.get<PlayerEffectsController>(PlayerEffectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
