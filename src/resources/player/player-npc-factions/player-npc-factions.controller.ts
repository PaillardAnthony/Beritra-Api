import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerNpcFactionsService } from './player-npc-factions.service';
import { CreatePlayerNpcFactionDto } from './dto/create-player-npc-faction.dto';
import { UpdatePlayerNpcFactionDto } from './dto/update-player-npc-faction.dto';

@Controller('player-npc-factions')
export class PlayerNpcFactionsController {
  constructor(private readonly playerNpcFactionsService: PlayerNpcFactionsService) {}

  @Post()
  create(@Body() createPlayerNpcFactionDto: CreatePlayerNpcFactionDto) {
    return this.playerNpcFactionsService.create(createPlayerNpcFactionDto);
  }

  @Get()
  findAll() {
    return this.playerNpcFactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerNpcFactionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerNpcFactionDto: UpdatePlayerNpcFactionDto) {
    return this.playerNpcFactionsService.update(+id, updatePlayerNpcFactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerNpcFactionsService.remove(+id);
  }
}
