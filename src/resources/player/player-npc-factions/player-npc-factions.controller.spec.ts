import { Test, TestingModule } from '@nestjs/testing';
import { PlayerNpcFactionsController } from './player-npc-factions.controller';
import { PlayerNpcFactionsService } from './player-npc-factions.service';

describe('PlayerNpcFactionsController', () => {
  let controller: PlayerNpcFactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerNpcFactionsController],
      providers: [PlayerNpcFactionsService],
    }).compile();

    controller = module.get<PlayerNpcFactionsController>(PlayerNpcFactionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
