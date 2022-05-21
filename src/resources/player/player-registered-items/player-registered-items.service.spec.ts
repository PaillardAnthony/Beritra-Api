import { Test, TestingModule } from '@nestjs/testing';
import { PlayerRegisteredItemsService } from './player-registered-items.service';

describe('PlayerRegisteredItemsService', () => {
  let service: PlayerRegisteredItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerRegisteredItemsService],
    }).compile();

    service = module.get<PlayerRegisteredItemsService>(PlayerRegisteredItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
