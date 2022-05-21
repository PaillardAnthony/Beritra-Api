import { Module } from '@nestjs/common';
import { PlayerCooldownsService } from './player-cooldowns.service';
import { PlayerCooldownsController } from './player-cooldowns.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerCooldowns} from "../../../entities/PlayerCooldowns";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerCooldowns])],
  controllers: [PlayerCooldownsController],
  providers: [PlayerCooldownsService]
})
export class PlayerCooldownsModule {}
