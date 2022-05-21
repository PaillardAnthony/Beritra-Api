import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerPunishementsService } from './player-punishements.service';
import { CreatePlayerPunishementDto } from './dto/create-player-punishement.dto';
import { UpdatePlayerPunishementDto } from './dto/update-player-punishement.dto';

@Controller('player-punishements')
export class PlayerPunishementsController {
  constructor(private readonly playerPunishementsService: PlayerPunishementsService) {}

  @Post()
  create(@Body() createPlayerPunishementDto: CreatePlayerPunishementDto) {
    return this.playerPunishementsService.create(createPlayerPunishementDto);
  }

  @Get()
  findAll() {
    return this.playerPunishementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerPunishementsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerPunishementDto: UpdatePlayerPunishementDto) {
    return this.playerPunishementsService.update(+id, updatePlayerPunishementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerPunishementsService.remove(+id);
  }
}
