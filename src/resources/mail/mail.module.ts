import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Mail} from "../../entities/Mail";

@Module({
  imports: [TypeOrmModule.forFeature([Mail])],
  controllers: [MailController],
  providers: [MailService]
})
export class MailModule {}
