import { Test, TestingModule } from '@nestjs/testing';
import { BannedMacController } from './banned-mac.controller';
import { BannedMacService } from './banned-mac.service';

describe('BannedMacController', () => {
  let controller: BannedMacController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BannedMacController],
      providers: [BannedMacService],
    }).compile();

    controller = module.get<BannedMacController>(BannedMacController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
