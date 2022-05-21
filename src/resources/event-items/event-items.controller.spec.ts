import { Test, TestingModule } from '@nestjs/testing';
import { EventItemsController } from './event-items.controller';
import { EventItemsService } from './event-items.service';

describe('EventItemsController', () => {
  let controller: EventItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventItemsController],
      providers: [EventItemsService],
    }).compile();

    controller = module.get<EventItemsController>(EventItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
