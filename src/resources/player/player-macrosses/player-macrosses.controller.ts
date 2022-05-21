import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerMacrossesService } from './player-macrosses.service';
import { CreatePlayerMacrossDto } from './dto/create-player-macross.dto';
import { UpdatePlayerMacrossDto } from './dto/update-player-macross.dto';

@Controller('player-macrosses')
export class PlayerMacrossesController {
  constructor(private readonly playerMacrossesService: PlayerMacrossesService) {}

  @Post()
  create(@Body() createPlayerMacrossDto: CreatePlayerMacrossDto) {
    return this.playerMacrossesService.create(createPlayerMacrossDto);
  }

  @Get()
  findAll() {
    return this.playerMacrossesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerMacrossesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerMacrossDto: UpdatePlayerMacrossDto) {
    return this.playerMacrossesService.update(+id, updatePlayerMacrossDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerMacrossesService.remove(+id);
  }
}
