import { Test, TestingModule } from '@nestjs/testing';
import { PlayerRecipesService } from './player-recipes.service';

describe('PlayerRecipesService', () => {
  let service: PlayerRecipesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerRecipesService],
    }).compile();

    service = module.get<PlayerRecipesService>(PlayerRecipesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
