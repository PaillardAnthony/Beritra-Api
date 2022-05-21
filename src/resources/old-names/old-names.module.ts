import { Module } from '@nestjs/common';
import { OldNamesService } from './old-names.service';
import { OldNamesController } from './old-names.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {OldNames} from "../../entities/OldNames";

@Module({
  imports: [TypeOrmModule.forFeature([OldNames])],
  controllers: [OldNamesController],
  providers: [OldNamesService]
})
export class OldNamesModule {}
