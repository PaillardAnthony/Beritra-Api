import { Test, TestingModule } from '@nestjs/testing';
import { PlayerTitlesService } from './player-titles.service';

describe('PlayerTitlesService', () => {
  let service: PlayerTitlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerTitlesService],
    }).compile();

    service = module.get<PlayerTitlesService>(PlayerTitlesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
