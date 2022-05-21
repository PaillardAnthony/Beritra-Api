import { Test, TestingModule } from '@nestjs/testing';
import { OldNamesService } from './old-names.service';

describe('OldNamesService', () => {
  let service: OldNamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OldNamesService],
    }).compile();

    service = module.get<OldNamesService>(OldNamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
