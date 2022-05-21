import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerSkillsService } from './player-skills.service';
import { CreatePlayerSkillDto } from './dto/create-player-skill.dto';
import { UpdatePlayerSkillDto } from './dto/update-player-skill.dto';

@Controller('player-skills')
export class PlayerSkillsController {
  constructor(private readonly playerSkillsService: PlayerSkillsService) {}

  @Post()
  create(@Body() createPlayerSkillDto: CreatePlayerSkillDto) {
    return this.playerSkillsService.create(createPlayerSkillDto);
  }

  @Get()
  findAll() {
    return this.playerSkillsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerSkillsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerSkillDto: UpdatePlayerSkillDto) {
    return this.playerSkillsService.update(+id, updatePlayerSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerSkillsService.remove(+id);
  }
}
