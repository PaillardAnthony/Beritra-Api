import { Module } from '@nestjs/common';
import { PlayerAtreianBestiariesService } from './player-atreian-bestiaries.service';
import { PlayerAtreianBestiariesController } from './player-atreian-bestiaries.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerAtreianBestiary} from "../../../entities/PlayerAtreianBestiary";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerAtreianBestiary])],
  controllers: [PlayerAtreianBestiariesController],
  providers: [PlayerAtreianBestiariesService]
})
export class PlayerAtreianBestiariesModule {}
