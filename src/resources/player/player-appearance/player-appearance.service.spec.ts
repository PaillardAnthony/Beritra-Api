import { Test, TestingModule } from '@nestjs/testing';
import { PlayerAppearanceService } from './player-appearance.service';

describe('PlayerAppearanceService', () => {
  let service: PlayerAppearanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerAppearanceService],
    }).compile();

    service = module.get<PlayerAppearanceService>(PlayerAppearanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
