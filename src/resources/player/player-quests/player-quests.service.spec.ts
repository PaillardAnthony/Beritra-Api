import { Test, TestingModule } from '@nestjs/testing';
import { PlayerQuestsService } from './player-quests.service';

describe('PlayerQuestsService', () => {
  let service: PlayerQuestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerQuestsService],
    }).compile();

    service = module.get<PlayerQuestsService>(PlayerQuestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
