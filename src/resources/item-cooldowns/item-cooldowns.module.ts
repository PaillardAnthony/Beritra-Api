import { Module } from '@nestjs/common';
import { ItemCooldownsService } from './item-cooldowns.service';
import { ItemCooldownsController } from './item-cooldowns.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ItemCooldowns} from "../../entities/ItemCooldowns";

@Module({
  imports: [TypeOrmModule.forFeature([ItemCooldowns])],
  controllers: [ItemCooldownsController],
  providers: [ItemCooldownsService]
})
export class ItemCooldownsModule {}
