import { Module } from '@nestjs/common';
import { PlayerStigmasEquippedsService } from './player-stigmas-equippeds.service';
import { PlayerStigmasEquippedsController } from './player-stigmas-equippeds.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerStigmasEquipped} from "../../../entities/PlayerStigmasEquipped";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerStigmasEquipped])],
  controllers: [PlayerStigmasEquippedsController],
  providers: [PlayerStigmasEquippedsService]
})
export class PlayerStigmasEquippedsModule {}
