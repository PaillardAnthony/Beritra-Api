import { Test, TestingModule } from '@nestjs/testing';
import { PortalCooldownsController } from './portal-cooldowns.controller';
import { PortalCooldownsService } from './portal-cooldowns.service';

describe('PortalCooldownsController', () => {
  let controller: PortalCooldownsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PortalCooldownsController],
      providers: [PortalCooldownsService],
    }).compile();

    controller = module.get<PortalCooldownsController>(PortalCooldownsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
