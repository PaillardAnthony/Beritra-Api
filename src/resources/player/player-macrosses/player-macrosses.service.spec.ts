import { Test, TestingModule } from '@nestjs/testing';
import { PlayerMacrossesService } from './player-macrosses.service';

describe('PlayerMacrossesService', () => {
  let service: PlayerMacrossesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerMacrossesService],
    }).compile();

    service = module.get<PlayerMacrossesService>(PlayerMacrossesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
