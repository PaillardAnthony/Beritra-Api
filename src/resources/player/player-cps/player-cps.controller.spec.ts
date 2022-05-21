import { Test, TestingModule } from '@nestjs/testing';
import { PlayerCpsController } from './player-cps.controller';
import { PlayerCpsService } from './player-cps.service';

describe('PlayerCpsController', () => {
  let controller: PlayerCpsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerCpsController],
      providers: [PlayerCpsService],
    }).compile();

    controller = module.get<PlayerCpsController>(PlayerCpsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
