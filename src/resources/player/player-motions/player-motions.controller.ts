import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerMotionsService } from './player-motions.service';
import { CreatePlayerMotionDto } from './dto/create-player-motion.dto';
import { UpdatePlayerMotionDto } from './dto/update-player-motion.dto';

@Controller('player-motions')
export class PlayerMotionsController {
  constructor(private readonly playerMotionsService: PlayerMotionsService) {}

  @Post()
  create(@Body() createPlayerMotionDto: CreatePlayerMotionDto) {
    return this.playerMotionsService.create(createPlayerMotionDto);
  }

  @Get()
  findAll() {
    return this.playerMotionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerMotionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerMotionDto: UpdatePlayerMotionDto) {
    return this.playerMotionsService.update(+id, updatePlayerMotionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerMotionsService.remove(+id);
  }
}
