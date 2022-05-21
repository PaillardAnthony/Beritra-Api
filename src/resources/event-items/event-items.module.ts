import { Module } from '@nestjs/common';
import { EventItemsService } from './event-items.service';
import { EventItemsController } from './event-items.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {EventItems} from "../../entities/EventItems";

@Module({
  imports: [TypeOrmModule.forFeature([EventItems])],
  controllers: [EventItemsController],
  providers: [EventItemsService]
})
export class EventItemsModule {}
