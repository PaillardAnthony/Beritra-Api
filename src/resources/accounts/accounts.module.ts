import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AccountData} from "../../entities/AccountData";

@Module({
  imports: [TypeOrmModule.forFeature([AccountData])],
  providers: [AccountsService],
  controllers: [AccountsController]
})
export class AccountsModule {}
