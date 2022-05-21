import { Module } from '@nestjs/common';
import { PlayerNpcFactionsService } from './player-npc-factions.service';
import { PlayerNpcFactionsController } from './player-npc-factions.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerNpcFactions} from "../../../entities/PlayerNpcFactions";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerNpcFactions])],
  controllers: [PlayerNpcFactionsController],
  providers: [PlayerNpcFactionsService]
})
export class PlayerNpcFactionsModule {}
