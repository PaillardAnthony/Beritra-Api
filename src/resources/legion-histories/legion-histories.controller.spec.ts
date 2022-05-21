import { Test, TestingModule } from '@nestjs/testing';
import { LegionHistoriesController } from './legion-histories.controller';
import { LegionHistoriesService } from './legion-histories.service';

describe('LegionHistoriesController', () => {
  let controller: LegionHistoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LegionHistoriesController],
      providers: [LegionHistoriesService],
    }).compile();

    controller = module.get<LegionHistoriesController>(LegionHistoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
