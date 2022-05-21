import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerLifeStatsService } from './player-life-stats.service';
import { CreatePlayerLifeStatDto } from './dto/create-player-life-stat.dto';
import { UpdatePlayerLifeStatDto } from './dto/update-player-life-stat.dto';

@Controller('player-life-stats')
export class PlayerLifeStatsController {
  constructor(private readonly playerLifeStatsService: PlayerLifeStatsService) {}

  @Post()
  create(@Body() createPlayerLifeStatDto: CreatePlayerLifeStatDto) {
    return this.playerLifeStatsService.create(createPlayerLifeStatDto);
  }

  @Get()
  findAll() {
    return this.playerLifeStatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerLifeStatsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerLifeStatDto: UpdatePlayerLifeStatDto) {
    return this.playerLifeStatsService.update(+id, updatePlayerLifeStatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerLifeStatsService.remove(+id);
  }
}
