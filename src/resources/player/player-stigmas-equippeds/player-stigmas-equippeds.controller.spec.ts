import { Test, TestingModule } from '@nestjs/testing';
import { PlayerStigmasEquippedsController } from './player-stigmas-equippeds.controller';
import { PlayerStigmasEquippedsService } from './player-stigmas-equippeds.service';

describe('PlayerStigmasEquippedsController', () => {
  let controller: PlayerStigmasEquippedsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerStigmasEquippedsController],
      providers: [PlayerStigmasEquippedsService],
    }).compile();

    controller = module.get<PlayerStigmasEquippedsController>(PlayerStigmasEquippedsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
