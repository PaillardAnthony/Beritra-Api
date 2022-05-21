import { Injectable } from '@nestjs/common';
import { CreatePlayerLifeStatDto } from './dto/create-player-life-stat.dto';
import { UpdatePlayerLifeStatDto } from './dto/update-player-life-stat.dto';

@Injectable()
export class PlayerLifeStatsService {
  create(createPlayerLifeStatDto: CreatePlayerLifeStatDto) {
    return 'This action adds a new playerLifeStat';
  }

  findAll() {
    return `This action returns all playerLifeStats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerLifeStat`;
  }

  update(id: number, updatePlayerLifeStatDto: UpdatePlayerLifeStatDto) {
    return `This action updates a #${id} playerLifeStat`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerLifeStat`;
  }
}
