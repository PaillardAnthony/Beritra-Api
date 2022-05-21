import { Test, TestingModule } from '@nestjs/testing';
import { PlayerAtreianBestiariesService } from './player-atreian-bestiaries.service';

describe('PlayerAtreianBestiariesService', () => {
  let service: PlayerAtreianBestiariesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerAtreianBestiariesService],
    }).compile();

    service = module.get<PlayerAtreianBestiariesService>(PlayerAtreianBestiariesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
