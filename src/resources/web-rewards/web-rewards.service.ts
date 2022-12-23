import { Injectable } from '@nestjs/common';
import { CreateWebRewardDto } from './dto/create-web-reward.dto';
import { UpdateWebRewardDto } from './dto/update-web-reward.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { WebReward } from './../../entities/WebReward';
import { Repository } from 'typeorm';

@Injectable()
export class WebRewardsService {

  constructor(@InjectRepository(WebReward) private repository: Repository<WebReward>) {

  }

  async create(createWebRewardDto: CreateWebRewardDto) {
    return this.repository.save(createWebRewardDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateWebRewardDto: UpdateWebRewardDto) {
    return this.repository.update(id, updateWebRewardDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
