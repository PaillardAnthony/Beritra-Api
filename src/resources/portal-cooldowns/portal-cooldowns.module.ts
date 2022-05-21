import { Module } from '@nestjs/common';
import { PortalCooldownsService } from './portal-cooldowns.service';
import { PortalCooldownsController } from './portal-cooldowns.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PortalCooldowns} from "../../entities/PortalCooldowns";

@Module({
  imports: [TypeOrmModule.forFeature([PortalCooldowns])],
  controllers: [PortalCooldownsController],
  providers: [PortalCooldownsService]
})
export class PortalCooldownsModule {}
