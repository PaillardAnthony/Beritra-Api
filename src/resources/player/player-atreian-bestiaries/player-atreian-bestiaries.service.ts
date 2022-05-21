import { Injectable } from '@nestjs/common';
import { CreatePlayerAtreianBestiaryDto } from './dto/create-player-atreian-bestiary.dto';
import { UpdatePlayerAtreianBestiaryDto } from './dto/update-player-atreian-bestiary.dto';

@Injectable()
export class PlayerAtreianBestiariesService {
  create(createPlayerAtreianBestiaryDto: CreatePlayerAtreianBestiaryDto) {
    return 'This action adds a new playerAtreianBestiary';
  }

  findAll() {
    return `This action returns all playerAtreianBestiaries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerAtreianBestiary`;
  }

  update(id: number, updatePlayerAtreianBestiaryDto: UpdatePlayerAtreianBestiaryDto) {
    return `This action updates a #${id} playerAtreianBestiary`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerAtreianBestiary`;
  }
}
