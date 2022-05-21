import { Test, TestingModule } from '@nestjs/testing';
import { PlayerSettingsController } from './player-settings.controller';
import { PlayerSettingsService } from './player-settings.service';

describe('PlayerSettingsController', () => {
  let controller: PlayerSettingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerSettingsController],
      providers: [PlayerSettingsService],
    }).compile();

    controller = module.get<PlayerSettingsController>(PlayerSettingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
