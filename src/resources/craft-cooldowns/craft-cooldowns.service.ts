import { Injectable } from '@nestjs/common';
import { CreateCraftCooldownDto } from './dto/create-craft-cooldown.dto';
import { UpdateCraftCooldownDto } from './dto/update-craft-cooldown.dto';

@Injectable()
export class CraftCooldownsService {
  create(createCraftCooldownDto: CreateCraftCooldownDto) {
    return 'This action adds a new craftCooldown';
  }

  findAll() {
    return `This action returns all craftCooldowns`;
  }

  findOne(id: number) {
    return `This action returns a #${id} craftCooldown`;
  }

  update(id: number, updateCraftCooldownDto: UpdateCraftCooldownDto) {
    return `This action updates a #${id} craftCooldown`;
  }

  remove(id: number) {
    return `This action removes a #${id} craftCooldown`;
  }
}
