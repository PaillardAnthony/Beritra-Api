import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerEffectsService } from './player-effects.service';
import { CreatePlayerEffectDto } from './dto/create-player-effect.dto';
import { UpdatePlayerEffectDto } from './dto/update-player-effect.dto';

@Controller('player-effects')
export class PlayerEffectsController {
  constructor(private readonly playerEffectsService: PlayerEffectsService) {}

  @Post()
  create(@Body() createPlayerEffectDto: CreatePlayerEffectDto) {
    return this.playerEffectsService.create(createPlayerEffectDto);
  }

  @Get()
  findAll() {
    return this.playerEffectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerEffectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerEffectDto: UpdatePlayerEffectDto) {
    return this.playerEffectsService.update(+id, updatePlayerEffectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerEffectsService.remove(+id);
  }
}
