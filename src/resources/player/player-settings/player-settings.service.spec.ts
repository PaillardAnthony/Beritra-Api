import { Test, TestingModule } from '@nestjs/testing';
import { PlayerSettingsService } from './player-settings.service';

describe('PlayerSettingsService', () => {
  let service: PlayerSettingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerSettingsService],
    }).compile();

    service = module.get<PlayerSettingsService>(PlayerSettingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
