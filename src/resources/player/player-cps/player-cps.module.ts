import { Module } from '@nestjs/common';
import { PlayerCpsService } from './player-cps.service';
import { PlayerCpsController } from './player-cps.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerCp} from "../../../entities/PlayerCp";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerCp])],
  controllers: [PlayerCpsController],
  providers: [PlayerCpsService]
})
export class PlayerCpsModule {}
