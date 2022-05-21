import { Module } from '@nestjs/common';
import { PlayerRegisteredItemsService } from './player-registered-items.service';
import { PlayerRegisteredItemsController } from './player-registered-items.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerRegisteredItems} from "../../../entities/PlayerRegisteredItems";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerRegisteredItems])],
  controllers: [PlayerRegisteredItemsController],
  providers: [PlayerRegisteredItemsService]
})
export class PlayerRegisteredItemsModule {}
