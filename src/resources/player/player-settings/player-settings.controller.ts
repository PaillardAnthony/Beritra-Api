import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerSettingsService } from './player-settings.service';
import { CreatePlayerSettingDto } from './dto/create-player-setting.dto';
import { UpdatePlayerSettingDto } from './dto/update-player-setting.dto';

@Controller('player-settings')
export class PlayerSettingsController {
  constructor(private readonly playerSettingsService: PlayerSettingsService) {}

  @Post()
  create(@Body() createPlayerSettingDto: CreatePlayerSettingDto) {
    return this.playerSettingsService.create(createPlayerSettingDto);
  }

  @Get()
  findAll() {
    return this.playerSettingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerSettingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerSettingDto: UpdatePlayerSettingDto) {
    return this.playerSettingsService.update(+id, updatePlayerSettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerSettingsService.remove(+id);
  }
}
