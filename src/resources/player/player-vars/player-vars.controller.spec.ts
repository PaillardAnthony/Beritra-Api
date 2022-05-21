import { Test, TestingModule } from '@nestjs/testing';
import { PlayerVarsController } from './player-vars.controller';
import { PlayerVarsService } from './player-vars.service';

describe('PlayerVarsController', () => {
  let controller: PlayerVarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerVarsController],
      providers: [PlayerVarsService],
    }).compile();

    controller = module.get<PlayerVarsController>(PlayerVarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
