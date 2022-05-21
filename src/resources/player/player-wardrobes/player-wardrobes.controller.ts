import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerWardrobesService } from './player-wardrobes.service';
import { CreatePlayerWardrobeDto } from './dto/create-player-wardrobe.dto';
import { UpdatePlayerWardrobeDto } from './dto/update-player-wardrobe.dto';

@Controller('player-wardrobes')
export class PlayerWardrobesController {
  constructor(private readonly playerWardrobesService: PlayerWardrobesService) {}

  @Post()
  create(@Body() createPlayerWardrobeDto: CreatePlayerWardrobeDto) {
    return this.playerWardrobesService.create(createPlayerWardrobeDto);
  }

  @Get()
  findAll() {
    return this.playerWardrobesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerWardrobesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerWardrobeDto: UpdatePlayerWardrobeDto) {
    return this.playerWardrobesService.update(+id, updatePlayerWardrobeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerWardrobesService.remove(+id);
  }
}
