import { Injectable } from '@nestjs/common';
import { CreatePlayerWardrobeDto } from './dto/create-player-wardrobe.dto';
import { UpdatePlayerWardrobeDto } from './dto/update-player-wardrobe.dto';

@Injectable()
export class PlayerWardrobesService {
  create(createPlayerWardrobeDto: CreatePlayerWardrobeDto) {
    return 'This action adds a new playerWardrobe';
  }

  findAll() {
    return `This action returns all playerWardrobes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerWardrobe`;
  }

  update(id: number, updatePlayerWardrobeDto: UpdatePlayerWardrobeDto) {
    return `This action updates a #${id} playerWardrobe`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerWardrobe`;
  }
}
