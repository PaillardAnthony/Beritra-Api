import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerCooldownsService } from './player-cooldowns.service';
import { CreatePlayerCooldownDto } from './dto/create-player-cooldown.dto';
import { UpdatePlayerCooldownDto } from './dto/update-player-cooldown.dto';

@Controller('player-cooldowns')
export class PlayerCooldownsController {
  constructor(private readonly playerCooldownsService: PlayerCooldownsService) {}

  @Post()
  create(@Body() createPlayerCooldownDto: CreatePlayerCooldownDto) {
    return this.playerCooldownsService.create(createPlayerCooldownDto);
  }

  @Get()
  findAll() {
    return this.playerCooldownsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerCooldownsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerCooldownDto: UpdatePlayerCooldownDto) {
    return this.playerCooldownsService.update(+id, updatePlayerCooldownDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerCooldownsService.remove(+id);
  }
}
