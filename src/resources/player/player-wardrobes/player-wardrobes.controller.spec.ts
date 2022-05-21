import { Test, TestingModule } from '@nestjs/testing';
import { PlayerWardrobesController } from './player-wardrobes.controller';
import { PlayerWardrobesService } from './player-wardrobes.service';

describe('PlayerWardrobesController', () => {
  let controller: PlayerWardrobesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerWardrobesController],
      providers: [PlayerWardrobesService],
    }).compile();

    controller = module.get<PlayerWardrobesController>(PlayerWardrobesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
