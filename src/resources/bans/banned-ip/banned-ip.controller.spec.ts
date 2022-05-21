import { Test, TestingModule } from '@nestjs/testing';
import { BannedIpController } from './banned-ip.controller';
import { BannedIpService } from './banned-ip.service';

describe('BannedIpController', () => {
  let controller: BannedIpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BannedIpController],
      providers: [BannedIpService],
    }).compile();

    controller = module.get<BannedIpController>(BannedIpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
