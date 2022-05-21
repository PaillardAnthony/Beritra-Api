import { Injectable } from '@nestjs/common';
import { CreatePlayerEffectDto } from './dto/create-player-effect.dto';
import { UpdatePlayerEffectDto } from './dto/update-player-effect.dto';

@Injectable()
export class PlayerEffectsService {
  create(createPlayerEffectDto: CreatePlayerEffectDto) {
    return 'This action adds a new playerEffect';
  }

  findAll() {
    return `This action returns all playerEffects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerEffect`;
  }

  update(id: number, updatePlayerEffectDto: UpdatePlayerEffectDto) {
    return `This action updates a #${id} playerEffect`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerEffect`;
  }
}
