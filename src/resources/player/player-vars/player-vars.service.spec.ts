import { Test, TestingModule } from '@nestjs/testing';
import { PlayerVarsService } from './player-vars.service';

describe('PlayerVarsService', () => {
  let service: PlayerVarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerVarsService],
    }).compile();

    service = module.get<PlayerVarsService>(PlayerVarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
