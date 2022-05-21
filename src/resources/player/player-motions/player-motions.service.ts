import { Injectable } from '@nestjs/common';
import { CreatePlayerMotionDto } from './dto/create-player-motion.dto';
import { UpdatePlayerMotionDto } from './dto/update-player-motion.dto';

@Injectable()
export class PlayerMotionsService {
  create(createPlayerMotionDto: CreatePlayerMotionDto) {
    return 'This action adds a new playerMotion';
  }

  findAll() {
    return `This action returns all playerMotions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerMotion`;
  }

  update(id: number, updatePlayerMotionDto: UpdatePlayerMotionDto) {
    return `This action updates a #${id} playerMotion`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerMotion`;
  }
}
