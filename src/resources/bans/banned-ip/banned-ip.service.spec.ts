import { Test, TestingModule } from '@nestjs/testing';
import { BannedIpService } from './banned-ip.service';

describe('BannedIpService', () => {
  let service: BannedIpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BannedIpService],
    }).compile();

    service = module.get<BannedIpService>(BannedIpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
