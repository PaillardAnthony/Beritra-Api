import { Module } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { FriendsController } from './friends.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Friends} from "../../entities/Friends";

@Module({
  imports: [TypeOrmModule.forFeature([Friends])],
  controllers: [FriendsController],
  providers: [FriendsService]
})
export class FriendsModule {}
