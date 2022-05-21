import { Module } from '@nestjs/common';
import { PlayerPunishementsService } from './player-punishements.service';
import { PlayerPunishementsController } from './player-punishements.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerPunishments} from "../../../entities/PlayerPunishments";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerPunishments])],
  controllers: [PlayerPunishementsController],
  providers: [PlayerPunishementsService]
})
export class PlayerPunishementsModule {}
