import { Test, TestingModule } from '@nestjs/testing';
import { PlayerTitlesController } from './player-titles.controller';
import { PlayerTitlesService } from './player-titles.service';

describe('PlayerTitlesController', () => {
  let controller: PlayerTitlesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerTitlesController],
      providers: [PlayerTitlesService],
    }).compile();

    controller = module.get<PlayerTitlesController>(PlayerTitlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
