import { Injectable } from '@nestjs/common';
import { CreatePlayerCpDto } from './dto/create-player-cp.dto';
import { UpdatePlayerCpDto } from './dto/update-player-cp.dto';

@Injectable()
export class PlayerCpsService {
  create(createPlayerCpDto: CreatePlayerCpDto) {
    return 'This action adds a new playerCp';
  }

  findAll() {
    return `This action returns all playerCps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerCp`;
  }

  update(id: number, updatePlayerCpDto: UpdatePlayerCpDto) {
    return `This action updates a #${id} playerCp`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerCp`;
  }
}
