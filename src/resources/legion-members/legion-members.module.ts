import { Module } from '@nestjs/common';
import { LegionMembersService } from './legion-members.service';
import { LegionMembersController } from './legion-members.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {LegionMembers} from "../../entities/LegionMembers";

@Module({
  imports: [TypeOrmModule.forFeature([LegionMembers])],
  controllers: [LegionMembersController],
  providers: [LegionMembersService]
})
export class LegionMembersModule {}
