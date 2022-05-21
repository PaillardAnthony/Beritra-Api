import { Test, TestingModule } from '@nestjs/testing';
import { PlayerPunishementsController } from './player-punishements.controller';
import { PlayerPunishementsService } from './player-punishements.service';

describe('PlayerPunishementsController', () => {
  let controller: PlayerPunishementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerPunishementsController],
      providers: [PlayerPunishementsService],
    }).compile();

    controller = module.get<PlayerPunishementsController>(PlayerPunishementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
