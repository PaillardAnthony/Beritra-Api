import { Test, TestingModule } from '@nestjs/testing';
import { LegionAnnouncementListsService } from './legion-announcement-lists.service';

describe('LegionAnnouncementListsService', () => {
  let service: LegionAnnouncementListsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LegionAnnouncementListsService],
    }).compile();

    service = module.get<LegionAnnouncementListsService>(LegionAnnouncementListsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
