import { Injectable } from '@nestjs/common';
import { CreatePlayerBindPointDto } from './dto/create-player-bind-point.dto';
import { UpdatePlayerBindPointDto } from './dto/update-player-bind-point.dto';

@Injectable()
export class PlayerBindPointService {
  create(createPlayerBindPointDto: CreatePlayerBindPointDto) {
    return 'This action adds a new playerBindPoint';
  }

  findAll() {
    return `This action returns all playerBindPoint`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerBindPoint`;
  }

  update(id: number, updatePlayerBindPointDto: UpdatePlayerBindPointDto) {
    return `This action updates a #${id} playerBindPoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerBindPoint`;
  }
}
