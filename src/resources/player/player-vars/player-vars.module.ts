import { Module } from '@nestjs/common';
import { PlayerVarsService } from './player-vars.service';
import { PlayerVarsController } from './player-vars.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerVars} from "../../../entities/PlayerVars";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerVars])],
  controllers: [PlayerVarsController],
  providers: [PlayerVarsService]
})
export class PlayerVarsModule {}
