import { Test, TestingModule } from '@nestjs/testing';
import { ItemCooldownsController } from './item-cooldowns.controller';
import { ItemCooldownsService } from './item-cooldowns.service';

describe('ItemCooldownsController', () => {
  let controller: ItemCooldownsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemCooldownsController],
      providers: [ItemCooldownsService],
    }).compile();

    controller = module.get<ItemCooldownsController>(ItemCooldownsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
