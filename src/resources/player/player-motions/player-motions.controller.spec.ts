import { Test, TestingModule } from '@nestjs/testing';
import { PlayerMotionsController } from './player-motions.controller';
import { PlayerMotionsService } from './player-motions.service';

describe('PlayerMotionsController', () => {
  let controller: PlayerMotionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerMotionsController],
      providers: [PlayerMotionsService],
    }).compile();

    controller = module.get<PlayerMotionsController>(PlayerMotionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
