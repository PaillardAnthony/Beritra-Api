import { Test, TestingModule } from '@nestjs/testing';
import { LegionMembersController } from './legion-members.controller';
import { LegionMembersService } from './legion-members.service';

describe('LegionMembersController', () => {
  let controller: LegionMembersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LegionMembersController],
      providers: [LegionMembersService],
    }).compile();

    controller = module.get<LegionMembersController>(LegionMembersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
