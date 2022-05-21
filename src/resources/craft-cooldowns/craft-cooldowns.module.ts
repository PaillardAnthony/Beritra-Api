import { Module } from '@nestjs/common';
import { CraftCooldownsService } from './craft-cooldowns.service';
import { CraftCooldownsController } from './craft-cooldowns.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CraftCooldowns} from "../../entities/CraftCooldowns";

@Module({
  imports: [TypeOrmModule.forFeature([CraftCooldowns])],
  controllers: [CraftCooldownsController],
  providers: [CraftCooldownsService]
})
export class CraftCooldownsModule {}
