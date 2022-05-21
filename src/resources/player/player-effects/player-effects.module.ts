import { Module } from '@nestjs/common';
import { PlayerEffectsService } from './player-effects.service';
import { PlayerEffectsController } from './player-effects.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerEffects} from "../../../entities/PlayerEffects";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerEffects])],
  controllers: [PlayerEffectsController],
  providers: [PlayerEffectsService]
})
export class PlayerEffectsModule {}
