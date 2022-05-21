import { Module } from '@nestjs/common';
import { BannedIpService } from './banned-ip.service';
import { BannedIpController } from './banned-ip.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {BannedIp} from "../../../entities/BannedIp";

@Module({
  imports: [TypeOrmModule.forFeature([BannedIp])],
  controllers: [BannedIpController],
  providers: [BannedIpService]
})
export class BannedIpModule {}
