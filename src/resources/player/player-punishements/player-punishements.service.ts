import { Injectable } from '@nestjs/common';
import { CreatePlayerPunishementDto } from './dto/create-player-punishement.dto';
import { UpdatePlayerPunishementDto } from './dto/update-player-punishement.dto';

@Injectable()
export class PlayerPunishementsService {
  create(createPlayerPunishementDto: CreatePlayerPunishementDto) {
    return 'This action adds a new playerPunishement';
  }

  findAll() {
    return `This action returns all playerPunishements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerPunishement`;
  }

  update(id: number, updatePlayerPunishementDto: UpdatePlayerPunishementDto) {
    return `This action updates a #${id} playerPunishement`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerPunishement`;
  }
}
