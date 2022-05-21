import { Injectable } from '@nestjs/common';
import { CreateWebRewardDto } from './dto/create-web-reward.dto';
import { UpdateWebRewardDto } from './dto/update-web-reward.dto';

@Injectable()
export class WebRewardsService {
  create(createWebRewardDto: CreateWebRewardDto) {
    return 'This action adds a new webReward';
  }

  findAll() {
    return `This action returns all webRewards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} webReward`;
  }

  update(id: number, updateWebRewardDto: UpdateWebRewardDto) {
    return `This action updates a #${id} webReward`;
  }

  remove(id: number) {
    return `This action removes a #${id} webReward`;
  }
}
