import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerAtreianBestiariesService } from './player-atreian-bestiaries.service';
import { CreatePlayerAtreianBestiaryDto } from './dto/create-player-atreian-bestiary.dto';
import { UpdatePlayerAtreianBestiaryDto } from './dto/update-player-atreian-bestiary.dto';

@Controller('player-atreian-bestiaries')
export class PlayerAtreianBestiariesController {
  constructor(private readonly playerAtreianBestiariesService: PlayerAtreianBestiariesService) {}

  @Post()
  create(@Body() createPlayerAtreianBestiaryDto: CreatePlayerAtreianBestiaryDto) {
    return this.playerAtreianBestiariesService.create(createPlayerAtreianBestiaryDto);
  }

  @Get()
  findAll() {
    return this.playerAtreianBestiariesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerAtreianBestiariesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerAtreianBestiaryDto: UpdatePlayerAtreianBestiaryDto) {
    return this.playerAtreianBestiariesService.update(+id, updatePlayerAtreianBestiaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerAtreianBestiariesService.remove(+id);
  }
}
