import { Test, TestingModule } from '@nestjs/testing';
import { PlayerWardrobesService } from './player-wardrobes.service';

describe('PlayerWardrobesService', () => {
  let service: PlayerWardrobesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerWardrobesService],
    }).compile();

    service = module.get<PlayerWardrobesService>(PlayerWardrobesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
