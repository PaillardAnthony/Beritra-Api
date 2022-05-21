import { Test, TestingModule } from '@nestjs/testing';
import { LegionAnnouncementListsController } from './legion-announcement-lists.controller';
import { LegionAnnouncementListsService } from './legion-announcement-lists.service';

describe('LegionAnnouncementListsController', () => {
  let controller: LegionAnnouncementListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LegionAnnouncementListsController],
      providers: [LegionAnnouncementListsService],
    }).compile();

    controller = module.get<LegionAnnouncementListsController>(LegionAnnouncementListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
