import { Module } from '@nestjs/common';
import { PlayerMotionsService } from './player-motions.service';
import { PlayerMotionsController } from './player-motions.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerMotions} from "../../../entities/PlayerMotions";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerMotions])],
  controllers: [PlayerMotionsController],
  providers: [PlayerMotionsService]
})
export class PlayerMotionsModule {}
