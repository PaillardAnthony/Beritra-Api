import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerAppearanceService } from './player-appearance.service';
import { CreatePlayerAppearanceDto } from './dto/create-player-appearance.dto';
import { UpdatePlayerAppearanceDto } from './dto/update-player-appearance.dto';

@Controller('player-appearance')
export class PlayerAppearanceController {
  constructor(private readonly playerAppearanceService: PlayerAppearanceService) {}

  @Post()
  create(@Body() createPlayerAppearanceDto: CreatePlayerAppearanceDto) {
    return this.playerAppearanceService.create(createPlayerAppearanceDto);
  }

  @Get()
  findAll() {
    return this.playerAppearanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerAppearanceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerAppearanceDto: UpdatePlayerAppearanceDto) {
    return this.playerAppearanceService.update(+id, updatePlayerAppearanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerAppearanceService.remove(+id);
  }
}
