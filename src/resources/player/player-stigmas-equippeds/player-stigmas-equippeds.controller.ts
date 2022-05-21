import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerStigmasEquippedsService } from './player-stigmas-equippeds.service';
import { CreatePlayerStigmasEquippedDto } from './dto/create-player-stigmas-equipped.dto';
import { UpdatePlayerStigmasEquippedDto } from './dto/update-player-stigmas-equipped.dto';

@Controller('player-stigmas-equippeds')
export class PlayerStigmasEquippedsController {
  constructor(private readonly playerStigmasEquippedsService: PlayerStigmasEquippedsService) {}

  @Post()
  create(@Body() createPlayerStigmasEquippedDto: CreatePlayerStigmasEquippedDto) {
    return this.playerStigmasEquippedsService.create(createPlayerStigmasEquippedDto);
  }

  @Get()
  findAll() {
    return this.playerStigmasEquippedsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerStigmasEquippedsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerStigmasEquippedDto: UpdatePlayerStigmasEquippedDto) {
    return this.playerStigmasEquippedsService.update(+id, updatePlayerStigmasEquippedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerStigmasEquippedsService.remove(+id);
  }
}
