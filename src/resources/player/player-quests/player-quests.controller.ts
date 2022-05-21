import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerQuestsService } from './player-quests.service';
import { CreatePlayerQuestDto } from './dto/create-player-quest.dto';
import { UpdatePlayerQuestDto } from './dto/update-player-quest.dto';

@Controller('player-quests')
export class PlayerQuestsController {
  constructor(private readonly playerQuestsService: PlayerQuestsService) {}

  @Post()
  create(@Body() createPlayerQuestDto: CreatePlayerQuestDto) {
    return this.playerQuestsService.create(createPlayerQuestDto);
  }

  @Get()
  findAll() {
    return this.playerQuestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerQuestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerQuestDto: UpdatePlayerQuestDto) {
    return this.playerQuestsService.update(+id, updatePlayerQuestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerQuestsService.remove(+id);
  }
}
