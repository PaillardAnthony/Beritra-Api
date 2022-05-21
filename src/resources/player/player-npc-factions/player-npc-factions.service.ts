import { Injectable } from '@nestjs/common';
import { CreatePlayerNpcFactionDto } from './dto/create-player-npc-faction.dto';
import { UpdatePlayerNpcFactionDto } from './dto/update-player-npc-faction.dto';

@Injectable()
export class PlayerNpcFactionsService {
  create(createPlayerNpcFactionDto: CreatePlayerNpcFactionDto) {
    return 'This action adds a new playerNpcFaction';
  }

  findAll() {
    return `This action returns all playerNpcFactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerNpcFaction`;
  }

  update(id: number, updatePlayerNpcFactionDto: UpdatePlayerNpcFactionDto) {
    return `This action updates a #${id} playerNpcFaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerNpcFaction`;
  }
}
