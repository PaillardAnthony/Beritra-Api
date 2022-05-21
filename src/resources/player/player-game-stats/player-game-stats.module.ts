import { Module } from '@nestjs/common';
import { PlayerGameStatsService } from './player-game-stats.service';
import { PlayerGameStatsController } from './player-game-stats.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerGameStats} from "../../../entities/PlayerGameStats";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerGameStats])],
  controllers: [PlayerGameStatsController],
  providers: [PlayerGameStatsService]
})
export class PlayerGameStatsModule {}
