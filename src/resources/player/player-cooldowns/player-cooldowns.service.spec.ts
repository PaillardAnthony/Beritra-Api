import { Test, TestingModule } from '@nestjs/testing';
import { PlayerCooldownsService } from './player-cooldowns.service';

describe('PlayerCooldownsService', () => {
  let service: PlayerCooldownsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerCooldownsService],
    }).compile();

    service = module.get<PlayerCooldownsService>(PlayerCooldownsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
