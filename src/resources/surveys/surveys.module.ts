import { Module } from '@nestjs/common';
import { SurveysService } from './surveys.service';
import { SurveysController } from './surveys.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Surveys} from "../../entities/Surveys";

@Module({
  imports: [TypeOrmModule.forFeature([Surveys])],
  controllers: [SurveysController],
  providers: [SurveysService]
})
export class SurveysModule {}
