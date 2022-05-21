import { Module } from '@nestjs/common';
import { AbyssRanksService } from './abyss-ranks.service';
import { AbyssRanksController } from './abyss-ranks.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AbyssRank} from "../../entities/AbyssRank";

@Module({
  imports: [TypeOrmModule.forFeature([AbyssRank])],
  controllers: [AbyssRanksController],
  providers: [AbyssRanksService]
})
export class AbyssRanksModule {}
