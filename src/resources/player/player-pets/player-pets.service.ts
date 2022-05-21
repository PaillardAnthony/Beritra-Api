import { Injectable } from '@nestjs/common';
import { CreatePlayerPetDto } from './dto/create-player-pet.dto';
import { UpdatePlayerPetDto } from './dto/update-player-pet.dto';

@Injectable()
export class PlayerPetsService {
  create(createPlayerPetDto: CreatePlayerPetDto) {
    return 'This action adds a new playerPet';
  }

  findAll() {
    return `This action returns all playerPets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerPet`;
  }

  update(id: number, updatePlayerPetDto: UpdatePlayerPetDto) {
    return `This action updates a #${id} playerPet`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerPet`;
  }
}
