import { Module } from '@nestjs/common';
import { BrokersService } from './brokers.service';
import { BrokersController } from './brokers.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Broker} from "../../entities/Broker";

@Module({
  imports: [TypeOrmModule.forFeature([Broker])],
  controllers: [BrokersController],
  providers: [BrokersService]
})
export class BrokersModule {}
