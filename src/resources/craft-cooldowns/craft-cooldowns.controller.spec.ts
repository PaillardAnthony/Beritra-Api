import { Test, TestingModule } from '@nestjs/testing';
import { CraftCooldownsController } from './craft-cooldowns.controller';
import { CraftCooldownsService } from './craft-cooldowns.service';

describe('CraftCooldownsController', () => {
  let controller: CraftCooldownsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CraftCooldownsController],
      providers: [CraftCooldownsService],
    }).compile();

    controller = module.get<CraftCooldownsController>(CraftCooldownsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
