import { Module } from '@nestjs/common';
import { WebRewardsService } from './web-rewards.service';
import { WebRewardsController } from './web-rewards.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {WebReward} from "../../entities/WebReward";

@Module({
  imports: [TypeOrmModule.forFeature([WebReward])],
  controllers: [WebRewardsController],
  providers: [WebRewardsService]
})
export class WebRewardsModule {}
