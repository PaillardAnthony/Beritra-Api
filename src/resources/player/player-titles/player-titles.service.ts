import { Injectable } from '@nestjs/common';
import { CreatePlayerTitleDto } from './dto/create-player-title.dto';
import { UpdatePlayerTitleDto } from './dto/update-player-title.dto';

@Injectable()
export class PlayerTitlesService {
  create(createPlayerTitleDto: CreatePlayerTitleDto) {
    return 'This action adds a new playerTitle';
  }

  findAll() {
    return `This action returns all playerTitles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerTitle`;
  }

  update(id: number, updatePlayerTitleDto: UpdatePlayerTitleDto) {
    return `This action updates a #${id} playerTitle`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerTitle`;
  }
}
