import { Test, TestingModule } from '@nestjs/testing';
import { PlayerCpsService } from './player-cps.service';

describe('PlayerCpsService', () => {
  let service: PlayerCpsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerCpsService],
    }).compile();

    service = module.get<PlayerCpsService>(PlayerCpsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
