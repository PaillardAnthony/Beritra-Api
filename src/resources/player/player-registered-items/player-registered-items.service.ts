import { Injectable } from '@nestjs/common';
import { CreatePlayerRegisteredItemDto } from './dto/create-player-registered-item.dto';
import { UpdatePlayerRegisteredItemDto } from './dto/update-player-registered-item.dto';

@Injectable()
export class PlayerRegisteredItemsService {
  create(createPlayerRegisteredItemDto: CreatePlayerRegisteredItemDto) {
    return 'This action adds a new playerRegisteredItem';
  }

  findAll() {
    return `This action returns all playerRegisteredItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerRegisteredItem`;
  }

  update(id: number, updatePlayerRegisteredItemDto: UpdatePlayerRegisteredItemDto) {
    return `This action updates a #${id} playerRegisteredItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerRegisteredItem`;
  }
}
