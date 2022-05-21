import { Test, TestingModule } from '@nestjs/testing';
import { PlayerStigmasEquippedsService } from './player-stigmas-equippeds.service';

describe('PlayerStigmasEquippedsService', () => {
  let service: PlayerStigmasEquippedsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerStigmasEquippedsService],
    }).compile();

    service = module.get<PlayerStigmasEquippedsService>(PlayerStigmasEquippedsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
