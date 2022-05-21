import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerVarsService } from './player-vars.service';
import { CreatePlayerVarDto } from './dto/create-player-var.dto';
import { UpdatePlayerVarDto } from './dto/update-player-var.dto';

@Controller('player-vars')
export class PlayerVarsController {
  constructor(private readonly playerVarsService: PlayerVarsService) {}

  @Post()
  create(@Body() createPlayerVarDto: CreatePlayerVarDto) {
    return this.playerVarsService.create(createPlayerVarDto);
  }

  @Get()
  findAll() {
    return this.playerVarsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerVarsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerVarDto: UpdatePlayerVarDto) {
    return this.playerVarsService.update(+id, updatePlayerVarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerVarsService.remove(+id);
  }
}
