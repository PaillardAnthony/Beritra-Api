import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {AuthDto} from "./resources/accounts/dto/auth.dto";
import {AccountsService} from "./resources/accounts/accounts.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
