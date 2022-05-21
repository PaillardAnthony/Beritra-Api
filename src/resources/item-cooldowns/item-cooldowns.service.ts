import { Injectable } from '@nestjs/common';
import { CreateItemCooldownDto } from './dto/create-item-cooldown.dto';
import { UpdateItemCooldownDto } from './dto/update-item-cooldown.dto';

@Injectable()
export class ItemCooldownsService {
  create(createItemCooldownDto: CreateItemCooldownDto) {
    return 'This action adds a new itemCooldown';
  }

  findAll() {
    return `This action returns all itemCooldowns`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemCooldown`;
  }

  update(id: number, updateItemCooldownDto: UpdateItemCooldownDto) {
    return `This action updates a #${id} itemCooldown`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemCooldown`;
  }
}
