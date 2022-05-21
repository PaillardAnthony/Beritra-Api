import { Module } from '@nestjs/common';
import { PlayerLifeStatsService } from './player-life-stats.service';
import { PlayerLifeStatsController } from './player-life-stats.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerLifeStats} from "../../../entities/PlayerLifeStats";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerLifeStats])],
  controllers: [PlayerLifeStatsController],
  providers: [PlayerLifeStatsService]
})
export class PlayerLifeStatsModule {}
