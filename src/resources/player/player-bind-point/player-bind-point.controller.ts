import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerBindPointService } from './player-bind-point.service';
import { CreatePlayerBindPointDto } from './dto/create-player-bind-point.dto';
import { UpdatePlayerBindPointDto } from './dto/update-player-bind-point.dto';

@Controller('player-bind-point')
export class PlayerBindPointController {
  constructor(private readonly playerBindPointService: PlayerBindPointService) {}

  @Post()
  create(@Body() createPlayerBindPointDto: CreatePlayerBindPointDto) {
    return this.playerBindPointService.create(createPlayerBindPointDto);
  }

  @Get()
  findAll() {
    return this.playerBindPointService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerBindPointService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerBindPointDto: UpdatePlayerBindPointDto) {
    return this.playerBindPointService.update(+id, updatePlayerBindPointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerBindPointService.remove(+id);
  }
}
