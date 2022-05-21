import { Injectable } from '@nestjs/common';
import { CreatePlayerEmotionDto } from './dto/create-player-emotion.dto';
import { UpdatePlayerEmotionDto } from './dto/update-player-emotion.dto';

@Injectable()
export class PlayerEmotionsService {
  create(createPlayerEmotionDto: CreatePlayerEmotionDto) {
    return 'This action adds a new playerEmotion';
  }

  findAll() {
    return `This action returns all playerEmotions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerEmotion`;
  }

  update(id: number, updatePlayerEmotionDto: UpdatePlayerEmotionDto) {
    return `This action updates a #${id} playerEmotion`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerEmotion`;
  }
}
