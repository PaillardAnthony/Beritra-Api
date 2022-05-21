import { Test, TestingModule } from '@nestjs/testing';
import { LegionMembersService } from './legion-members.service';

describe('LegionMembersService', () => {
  let service: LegionMembersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LegionMembersService],
    }).compile();

    service = module.get<LegionMembersService>(LegionMembersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
