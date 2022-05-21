import { Module } from '@nestjs/common';
import { PlayerAppearanceService } from './player-appearance.service';
import { PlayerAppearanceController } from './player-appearance.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerAppearance} from "../../../entities/PlayerAppearance";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerAppearance])],
  controllers: [PlayerAppearanceController],
  providers: [PlayerAppearanceService]
})
export class PlayerAppearanceModule {}
