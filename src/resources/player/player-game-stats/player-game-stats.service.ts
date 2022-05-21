import { Injectable } from '@nestjs/common';
import { CreatePlayerGameStatDto } from './dto/create-player-game-stat.dto';
import { UpdatePlayerGameStatDto } from './dto/update-player-game-stat.dto';

@Injectable()
export class PlayerGameStatsService {
  create(createPlayerGameStatDto: CreatePlayerGameStatDto) {
    return 'This action adds a new playerGameStat';
  }

  findAll() {
    return `This action returns all playerGameStats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerGameStat`;
  }

  update(id: number, updatePlayerGameStatDto: UpdatePlayerGameStatDto) {
    return `This action updates a #${id} playerGameStat`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerGameStat`;
  }
}
