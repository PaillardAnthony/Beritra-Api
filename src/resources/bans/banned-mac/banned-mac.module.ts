import { Module } from '@nestjs/common';
import { BannedMacService } from './banned-mac.service';
import { BannedMacController } from './banned-mac.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {BannedMac} from "../../../entities/BannedMac";

@Module({
  imports: [TypeOrmModule.forFeature([BannedMac])],
  controllers: [BannedMacController],
  providers: [BannedMacService]
})
export class BannedMacModule {}
