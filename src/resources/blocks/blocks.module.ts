import { Module } from '@nestjs/common';
import { BlocksService } from './blocks.service';
import { BlocksController } from './blocks.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Blocks} from "../../entities/Blocks";

@Module({
  imports: [TypeOrmModule.forFeature([Blocks])],
  controllers: [BlocksController],
  providers: [BlocksService]
})
export class BlocksModule {}
