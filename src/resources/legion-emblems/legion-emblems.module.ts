import { Module } from '@nestjs/common';
import { LegionEmblemsService } from './legion-emblems.service';
import { LegionEmblemsController } from './legion-emblems.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {LegionEmblems} from "../../entities/LegionEmblems";

@Module({
  imports: [TypeOrmModule.forFeature([LegionEmblems])],
  controllers: [LegionEmblemsController],
  providers: [LegionEmblemsService]
})
export class LegionEmblemsModule {}
