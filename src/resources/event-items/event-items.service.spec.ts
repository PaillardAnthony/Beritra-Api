import { Test, TestingModule } from '@nestjs/testing';
import { EventItemsService } from './event-items.service';

describe('EventItemsService', () => {
  let service: EventItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventItemsService],
    }).compile();

    service = module.get<EventItemsService>(EventItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
