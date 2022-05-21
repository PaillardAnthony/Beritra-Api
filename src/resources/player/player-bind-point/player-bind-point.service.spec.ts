import { Test, TestingModule } from '@nestjs/testing';
import { PlayerBindPointService } from './player-bind-point.service';

describe('PlayerBindPointService', () => {
  let service: PlayerBindPointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerBindPointService],
    }).compile();

    service = module.get<PlayerBindPointService>(PlayerBindPointService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
