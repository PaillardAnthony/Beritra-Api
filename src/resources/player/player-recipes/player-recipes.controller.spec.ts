import { Test, TestingModule } from '@nestjs/testing';
import { PlayerRecipesController } from './player-recipes.controller';
import { PlayerRecipesService } from './player-recipes.service';

describe('PlayerRecipesController', () => {
  let controller: PlayerRecipesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerRecipesController],
      providers: [PlayerRecipesService],
    }).compile();

    controller = module.get<PlayerRecipesController>(PlayerRecipesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
