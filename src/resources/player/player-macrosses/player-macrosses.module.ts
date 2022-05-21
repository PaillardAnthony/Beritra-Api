import { Module } from '@nestjs/common';
import { PlayerMacrossesService } from './player-macrosses.service';
import { PlayerMacrossesController } from './player-macrosses.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerMacrosses} from "../../../entities/PlayerMacrosses";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerMacrosses])],
  controllers: [PlayerMacrossesController],
  providers: [PlayerMacrossesService]
})
export class PlayerMacrossesModule {}
