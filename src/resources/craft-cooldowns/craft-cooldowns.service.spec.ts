import { Test, TestingModule } from '@nestjs/testing';
import { CraftCooldownsService } from './craft-cooldowns.service';

describe('CraftCooldownsService', () => {
  let service: CraftCooldownsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CraftCooldownsService],
    }).compile();

    service = module.get<CraftCooldownsService>(CraftCooldownsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
