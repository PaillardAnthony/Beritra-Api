import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerPetsService } from './player-pets.service';
import { CreatePlayerPetDto } from './dto/create-player-pet.dto';
import { UpdatePlayerPetDto } from './dto/update-player-pet.dto';

@Controller('player-pets')
export class PlayerPetsController {
  constructor(private readonly playerPetsService: PlayerPetsService) {}

  @Post()
  create(@Body() createPlayerPetDto: CreatePlayerPetDto) {
    return this.playerPetsService.create(createPlayerPetDto);
  }

  @Get()
  findAll() {
    return this.playerPetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerPetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerPetDto: UpdatePlayerPetDto) {
    return this.playerPetsService.update(+id, updatePlayerPetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerPetsService.remove(+id);
  }
}
