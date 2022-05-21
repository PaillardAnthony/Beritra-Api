import { Test, TestingModule } from '@nestjs/testing';
import { PlayerEmotionsService } from './player-emotions.service';

describe('PlayerEmotionsService', () => {
  let service: PlayerEmotionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerEmotionsService],
    }).compile();

    service = module.get<PlayerEmotionsService>(PlayerEmotionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
