import { Module } from '@nestjs/common';
import { LegionsService } from './legions.service';
import { LegionsController } from './legions.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Legions} from "../../entities/Legions";

@Module({
  imports: [TypeOrmModule.forFeature([Legions])],
  controllers: [LegionsController],
  providers: [LegionsService]
})
export class LegionsModule {}
