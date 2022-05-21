import { Module } from '@nestjs/common';
import { PlayerQuestsService } from './player-quests.service';
import { PlayerQuestsController } from './player-quests.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerQuests} from "../../../entities/PlayerQuests";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerQuests])],
  controllers: [PlayerQuestsController],
  providers: [PlayerQuestsService]
})
export class PlayerQuestsModule {}
