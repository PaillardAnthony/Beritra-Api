import { Test, TestingModule } from '@nestjs/testing';
import { AbyssRanksController } from './abyss-ranks.controller';
import { AbyssRanksService } from './abyss-ranks.service';

describe('AbyssRanksController', () => {
  let controller: AbyssRanksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbyssRanksController],
      providers: [AbyssRanksService],
    }).compile();

    controller = module.get<AbyssRanksController>(AbyssRanksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
