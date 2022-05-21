import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerCpsService } from './player-cps.service';
import { CreatePlayerCpDto } from './dto/create-player-cp.dto';
import { UpdatePlayerCpDto } from './dto/update-player-cp.dto';

@Controller('player-cps')
export class PlayerCpsController {
  constructor(private readonly playerCpsService: PlayerCpsService) {}

  @Post()
  create(@Body() createPlayerCpDto: CreatePlayerCpDto) {
    return this.playerCpsService.create(createPlayerCpDto);
  }

  @Get()
  findAll() {
    return this.playerCpsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerCpsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerCpDto: UpdatePlayerCpDto) {
    return this.playerCpsService.update(+id, updatePlayerCpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerCpsService.remove(+id);
  }
}
