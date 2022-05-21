import { Module } from '@nestjs/common';
import { PlayerTitlesService } from './player-titles.service';
import { PlayerTitlesController } from './player-titles.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerTitles} from "../../../entities/PlayerTitles";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerTitles])],
  controllers: [PlayerTitlesController],
  providers: [PlayerTitlesService]
})
export class PlayerTitlesModule {}
