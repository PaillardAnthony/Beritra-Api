import { Test, TestingModule } from '@nestjs/testing';
import { PlayerMotionsService } from './player-motions.service';

describe('PlayerMotionsService', () => {
  let service: PlayerMotionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerMotionsService],
    }).compile();

    service = module.get<PlayerMotionsService>(PlayerMotionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
