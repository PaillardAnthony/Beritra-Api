import { Test, TestingModule } from '@nestjs/testing';
import { PlayerNpcFactionsService } from './player-npc-factions.service';

describe('PlayerNpcFactionsService', () => {
  let service: PlayerNpcFactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerNpcFactionsService],
    }).compile();

    service = module.get<PlayerNpcFactionsService>(PlayerNpcFactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
