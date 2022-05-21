import { Module } from '@nestjs/common';
import { LegionHistoriesService } from './legion-histories.service';
import { LegionHistoriesController } from './legion-histories.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {LegionHistory} from "../../entities/LegionHistory";

@Module({
  imports: [TypeOrmModule.forFeature([LegionHistory])],
  controllers: [LegionHistoriesController],
  providers: [LegionHistoriesService]
})
export class LegionHistoriesModule {}
