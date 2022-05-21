import { Module } from '@nestjs/common';
import { PlayerSkillsService } from './player-skills.service';
import { PlayerSkillsController } from './player-skills.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerSkills} from "../../../entities/PlayerSkills";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerSkills])],
  controllers: [PlayerSkillsController],
  providers: [PlayerSkillsService]
})
export class PlayerSkillsModule {}
