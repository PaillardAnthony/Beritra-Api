import { Test, TestingModule } from '@nestjs/testing';
import { PortalCooldownsService } from './portal-cooldowns.service';

describe('PortalCooldownsService', () => {
  let service: PortalCooldownsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortalCooldownsService],
    }).compile();

    service = module.get<PortalCooldownsService>(PortalCooldownsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
