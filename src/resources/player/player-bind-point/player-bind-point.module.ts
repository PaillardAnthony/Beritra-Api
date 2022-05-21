import { Module } from '@nestjs/common';
import { PlayerBindPointService } from './player-bind-point.service';
import { PlayerBindPointController } from './player-bind-point.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerBindPoint} from "../../../entities/PlayerBindPoint";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerBindPoint])],
  controllers: [PlayerBindPointController],
  providers: [PlayerBindPointService]
})
export class PlayerBindPointModule {}
