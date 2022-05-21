import { Module } from '@nestjs/common';
import { GuidesService } from './guides.service';
import { GuidesController } from './guides.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Guides} from "../../entities/Guides";

@Module({
  imports: [TypeOrmModule.forFeature([Guides])],
  controllers: [GuidesController],
  providers: [GuidesService]
})
export class GuidesModule {}
