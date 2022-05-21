import { Test, TestingModule } from '@nestjs/testing';
import { LegionEmblemsController } from './legion-emblems.controller';
import { LegionEmblemsService } from './legion-emblems.service';

describe('LegionEmblemsController', () => {
  let controller: LegionEmblemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LegionEmblemsController],
      providers: [LegionEmblemsService],
    }).compile();

    controller = module.get<LegionEmblemsController>(LegionEmblemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
