import { Injectable } from '@nestjs/common';
import { CreatePlayerStigmasEquippedDto } from './dto/create-player-stigmas-equipped.dto';
import { UpdatePlayerStigmasEquippedDto } from './dto/update-player-stigmas-equipped.dto';

@Injectable()
export class PlayerStigmasEquippedsService {
  create(createPlayerStigmasEquippedDto: CreatePlayerStigmasEquippedDto) {
    return 'This action adds a new playerStigmasEquipped';
  }

  findAll() {
    return `This action returns all playerStigmasEquippeds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerStigmasEquipped`;
  }

  update(id: number, updatePlayerStigmasEquippedDto: UpdatePlayerStigmasEquippedDto) {
    return `This action updates a #${id} playerStigmasEquipped`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerStigmasEquipped`;
  }
}
