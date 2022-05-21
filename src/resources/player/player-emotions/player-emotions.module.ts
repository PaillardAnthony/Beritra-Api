import { Module } from '@nestjs/common';
import { PlayerEmotionsService } from './player-emotions.service';
import { PlayerEmotionsController } from './player-emotions.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerEmotions} from "../../../entities/PlayerEmotions";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerEmotions])],
  controllers: [PlayerEmotionsController],
  providers: [PlayerEmotionsService]
})
export class PlayerEmotionsModule {}
