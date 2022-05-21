import { Test, TestingModule } from '@nestjs/testing';
import { WebRewardsController } from './web-rewards.controller';
import { WebRewardsService } from './web-rewards.service';

describe('WebRewardsController', () => {
  let controller: WebRewardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebRewardsController],
      providers: [WebRewardsService],
    }).compile();

    controller = module.get<WebRewardsController>(WebRewardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
