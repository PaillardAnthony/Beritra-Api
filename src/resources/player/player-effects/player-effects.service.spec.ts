import { Test, TestingModule } from '@nestjs/testing';
import { PlayerEffectsService } from './player-effects.service';

describe('PlayerEffectsService', () => {
  let service: PlayerEffectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerEffectsService],
    }).compile();

    service = module.get<PlayerEffectsService>(PlayerEffectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
