import { Injectable } from '@nestjs/common';
import { CreatePlayerAppearanceDto } from './dto/create-player-appearance.dto';
import { UpdatePlayerAppearanceDto } from './dto/update-player-appearance.dto';

@Injectable()
export class PlayerAppearanceService {
  create(createPlayerAppearanceDto: CreatePlayerAppearanceDto) {
    return 'This action adds a new playerAppearance';
  }

  findAll() {
    return `This action returns all playerAppearance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerAppearance`;
  }

  update(id: number, updatePlayerAppearanceDto: UpdatePlayerAppearanceDto) {
    return `This action updates a #${id} playerAppearance`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerAppearance`;
  }
}
