import { Test, TestingModule } from '@nestjs/testing';
import { PlayerAppearanceController } from './player-appearance.controller';
import { PlayerAppearanceService } from './player-appearance.service';

describe('PlayerAppearanceController', () => {
  let controller: PlayerAppearanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerAppearanceController],
      providers: [PlayerAppearanceService],
    }).compile();

    controller = module.get<PlayerAppearanceController>(PlayerAppearanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
