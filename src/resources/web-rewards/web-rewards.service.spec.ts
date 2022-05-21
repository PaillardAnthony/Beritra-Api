import { Test, TestingModule } from '@nestjs/testing';
import { WebRewardsService } from './web-rewards.service';

describe('WebRewardsService', () => {
  let service: WebRewardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebRewardsService],
    }).compile();

    service = module.get<WebRewardsService>(WebRewardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
