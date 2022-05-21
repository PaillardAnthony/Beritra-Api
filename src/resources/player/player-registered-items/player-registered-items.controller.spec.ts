import { Test, TestingModule } from '@nestjs/testing';
import { PlayerRegisteredItemsController } from './player-registered-items.controller';
import { PlayerRegisteredItemsService } from './player-registered-items.service';

describe('PlayerRegisteredItemsController', () => {
  let controller: PlayerRegisteredItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerRegisteredItemsController],
      providers: [PlayerRegisteredItemsService],
    }).compile();

    controller = module.get<PlayerRegisteredItemsController>(PlayerRegisteredItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
