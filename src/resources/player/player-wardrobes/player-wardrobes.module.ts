import { Module } from '@nestjs/common';
import { PlayerWardrobesService } from './player-wardrobes.service';
import { PlayerWardrobesController } from './player-wardrobes.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerWardrobe} from "../../../entities/PlayerWardrobe";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerWardrobe])],
  controllers: [PlayerWardrobesController],
  providers: [PlayerWardrobesService]
})
export class PlayerWardrobesModule {}
