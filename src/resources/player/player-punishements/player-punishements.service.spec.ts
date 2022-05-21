import { Test, TestingModule } from '@nestjs/testing';
import { PlayerPunishementsService } from './player-punishements.service';

describe('PlayerPunishementsService', () => {
  let service: PlayerPunishementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerPunishementsService],
    }).compile();

    service = module.get<PlayerPunishementsService>(PlayerPunishementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
