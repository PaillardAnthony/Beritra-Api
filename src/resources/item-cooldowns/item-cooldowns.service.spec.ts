import { Test, TestingModule } from '@nestjs/testing';
import { ItemCooldownsService } from './item-cooldowns.service';

describe('ItemCooldownsService', () => {
  let service: ItemCooldownsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemCooldownsService],
    }).compile();

    service = module.get<ItemCooldownsService>(ItemCooldownsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
