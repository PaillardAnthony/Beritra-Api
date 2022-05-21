import { Injectable } from '@nestjs/common';
import { CreatePlayerMacrossDto } from './dto/create-player-macross.dto';
import { UpdatePlayerMacrossDto } from './dto/update-player-macross.dto';

@Injectable()
export class PlayerMacrossesService {
  create(createPlayerMacrossDto: CreatePlayerMacrossDto) {
    return 'This action adds a new playerMacross';
  }

  findAll() {
    return `This action returns all playerMacrosses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerMacross`;
  }

  update(id: number, updatePlayerMacrossDto: UpdatePlayerMacrossDto) {
    return `This action updates a #${id} playerMacross`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerMacross`;
  }
}
