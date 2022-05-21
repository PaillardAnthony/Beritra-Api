import { Injectable } from '@nestjs/common';
import { CreatePlayerCooldownDto } from './dto/create-player-cooldown.dto';
import { UpdatePlayerCooldownDto } from './dto/update-player-cooldown.dto';

@Injectable()
export class PlayerCooldownsService {
  create(createPlayerCooldownDto: CreatePlayerCooldownDto) {
    return 'This action adds a new playerCooldown';
  }

  findAll() {
    return `This action returns all playerCooldowns`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerCooldown`;
  }

  update(id: number, updatePlayerCooldownDto: UpdatePlayerCooldownDto) {
    return `This action updates a #${id} playerCooldown`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerCooldown`;
  }
}
