import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountData } from './entities/AccountData';

@Injectable()
export class AppService {
  constructor() {}
}
