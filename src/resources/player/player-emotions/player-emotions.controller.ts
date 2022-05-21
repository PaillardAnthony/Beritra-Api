import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerEmotionsService } from './player-emotions.service';
import { CreatePlayerEmotionDto } from './dto/create-player-emotion.dto';
import { UpdatePlayerEmotionDto } from './dto/update-player-emotion.dto';

@Controller('player-emotions')
export class PlayerEmotionsController {
  constructor(private readonly playerEmotionsService: PlayerEmotionsService) {}

  @Post()
  create(@Body() createPlayerEmotionDto: CreatePlayerEmotionDto) {
    return this.playerEmotionsService.create(createPlayerEmotionDto);
  }

  @Get()
  findAll() {
    return this.playerEmotionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerEmotionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerEmotionDto: UpdatePlayerEmotionDto) {
    return this.playerEmotionsService.update(+id, updatePlayerEmotionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerEmotionsService.remove(+id);
  }
}
