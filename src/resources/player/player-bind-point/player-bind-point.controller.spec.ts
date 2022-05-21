import { Test, TestingModule } from '@nestjs/testing';
import { PlayerBindPointController } from './player-bind-point.controller';
import { PlayerBindPointService } from './player-bind-point.service';

describe('PlayerBindPointController', () => {
  let controller: PlayerBindPointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerBindPointController],
      providers: [PlayerBindPointService],
    }).compile();

    controller = module.get<PlayerBindPointController>(PlayerBindPointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
