import { Test, TestingModule } from '@nestjs/testing';
import { LegionsController } from './legions.controller';
import { LegionsService } from './legions.service';

describe('LegionsController', () => {
  let controller: LegionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LegionsController],
      providers: [LegionsService],
    }).compile();

    controller = module.get<LegionsController>(LegionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
