import { Injectable } from '@nestjs/common';
import { CreatePlayerVarDto } from './dto/create-player-var.dto';
import { UpdatePlayerVarDto } from './dto/update-player-var.dto';

@Injectable()
export class PlayerVarsService {
  create(createPlayerVarDto: CreatePlayerVarDto) {
    return 'This action adds a new playerVar';
  }

  findAll() {
    return `This action returns all playerVars`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerVar`;
  }

  update(id: number, updatePlayerVarDto: UpdatePlayerVarDto) {
    return `This action updates a #${id} playerVar`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerVar`;
  }
}
