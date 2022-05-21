import { Module } from '@nestjs/common';
import { PlayerPetsService } from './player-pets.service';
import { PlayerPetsController } from './player-pets.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerPets} from "../../../entities/PlayerPets";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerPets])],
  controllers: [PlayerPetsController],
  providers: [PlayerPetsService]
})
export class PlayerPetsModule {}
