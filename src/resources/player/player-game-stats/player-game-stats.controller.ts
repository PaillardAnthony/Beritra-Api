import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerGameStatsService } from './player-game-stats.service';
import { CreatePlayerGameStatDto } from './dto/create-player-game-stat.dto';
import { UpdatePlayerGameStatDto } from './dto/update-player-game-stat.dto';

@Controller('player-game-stats')
export class PlayerGameStatsController {
  constructor(private readonly playerGameStatsService: PlayerGameStatsService) {}

  @Post()
  create(@Body() createPlayerGameStatDto: CreatePlayerGameStatDto) {
    return this.playerGameStatsService.create(createPlayerGameStatDto);
  }

  @Get()
  findAll() {
    return this.playerGameStatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerGameStatsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerGameStatDto: UpdatePlayerGameStatDto) {
    return this.playerGameStatsService.update(+id, updatePlayerGameStatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerGameStatsService.remove(+id);
  }
}
