import { Test, TestingModule } from '@nestjs/testing';
import { PlayerMacrossesController } from './player-macrosses.controller';
import { PlayerMacrossesService } from './player-macrosses.service';

describe('PlayerMacrossesController', () => {
  let controller: PlayerMacrossesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerMacrossesController],
      providers: [PlayerMacrossesService],
    }).compile();

    controller = module.get<PlayerMacrossesController>(PlayerMacrossesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
