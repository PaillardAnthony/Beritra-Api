import { Test, TestingModule } from '@nestjs/testing';
import { PlayerPetsService } from './player-pets.service';

describe('PlayerPetsService', () => {
  let service: PlayerPetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerPetsService],
    }).compile();

    service = module.get<PlayerPetsService>(PlayerPetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
