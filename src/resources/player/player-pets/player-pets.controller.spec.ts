import { Test, TestingModule } from '@nestjs/testing';
import { PlayerPetsController } from './player-pets.controller';
import { PlayerPetsService } from './player-pets.service';

describe('PlayerPetsController', () => {
  let controller: PlayerPetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerPetsController],
      providers: [PlayerPetsService],
    }).compile();

    controller = module.get<PlayerPetsController>(PlayerPetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
