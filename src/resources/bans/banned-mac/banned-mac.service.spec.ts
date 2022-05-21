import { Test, TestingModule } from '@nestjs/testing';
import { BannedMacService } from './banned-mac.service';

describe('BannedMacService', () => {
  let service: BannedMacService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BannedMacService],
    }).compile();

    service = module.get<BannedMacService>(BannedMacService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
