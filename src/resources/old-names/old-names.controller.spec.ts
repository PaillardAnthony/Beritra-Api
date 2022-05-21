import { Test, TestingModule } from '@nestjs/testing';
import { OldNamesController } from './old-names.controller';
import { OldNamesService } from './old-names.service';

describe('OldNamesController', () => {
  let controller: OldNamesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OldNamesController],
      providers: [OldNamesService],
    }).compile();

    controller = module.get<OldNamesController>(OldNamesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
