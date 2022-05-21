import { Module } from '@nestjs/common';
import { LegionAnnouncementListsService } from './legion-announcement-lists.service';
import { LegionAnnouncementListsController } from './legion-announcement-lists.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {LegionAnnouncementList} from "../../entities/LegionAnnouncementList";

@Module({
  imports: [TypeOrmModule.forFeature([LegionAnnouncementList])],
  controllers: [LegionAnnouncementListsController],
  providers: [LegionAnnouncementListsService]
})
export class LegionAnnouncementListsModule {}
