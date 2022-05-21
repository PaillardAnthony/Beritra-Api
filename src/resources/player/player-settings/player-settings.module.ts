import { Module } from '@nestjs/common';
import { PlayerSettingsService } from './player-settings.service';
import { PlayerSettingsController } from './player-settings.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerSettings} from "../../../entities/PlayerSettings";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerSettings])],
  controllers: [PlayerSettingsController],
  providers: [PlayerSettingsService]
})
export class PlayerSettingsModule {}
