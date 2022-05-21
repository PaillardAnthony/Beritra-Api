import { Test, TestingModule } from '@nestjs/testing';
import { PlayerAtreianBestiariesController } from './player-atreian-bestiaries.controller';
import { PlayerAtreianBestiariesService } from './player-atreian-bestiaries.service';

describe('PlayerAtreianBestiariesController', () => {
  let controller: PlayerAtreianBestiariesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerAtreianBestiariesController],
      providers: [PlayerAtreianBestiariesService],
    }).compile();

    controller = module.get<PlayerAtreianBestiariesController>(PlayerAtreianBestiariesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
