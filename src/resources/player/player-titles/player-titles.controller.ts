import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerTitlesService } from './player-titles.service';
import { CreatePlayerTitleDto } from './dto/create-player-title.dto';
import { UpdatePlayerTitleDto } from './dto/update-player-title.dto';

@Controller('player-titles')
export class PlayerTitlesController {
  constructor(private readonly playerTitlesService: PlayerTitlesService) {}

  @Post()
  create(@Body() createPlayerTitleDto: CreatePlayerTitleDto) {
    return this.playerTitlesService.create(createPlayerTitleDto);
  }

  @Get()
  findAll() {
    return this.playerTitlesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerTitlesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerTitleDto: UpdatePlayerTitleDto) {
    return this.playerTitlesService.update(+id, updatePlayerTitleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerTitlesService.remove(+id);
  }
}
