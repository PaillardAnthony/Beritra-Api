import { Test, TestingModule } from '@nestjs/testing';
import { PlayerCooldownsController } from './player-cooldowns.controller';
import { PlayerCooldownsService } from './player-cooldowns.service';

describe('PlayerCooldownsController', () => {
  let controller: PlayerCooldownsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerCooldownsController],
      providers: [PlayerCooldownsService],
    }).compile();

    controller = module.get<PlayerCooldownsController>(PlayerCooldownsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
