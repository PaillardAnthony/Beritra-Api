import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerRegisteredItemsService } from './player-registered-items.service';
import { CreatePlayerRegisteredItemDto } from './dto/create-player-registered-item.dto';
import { UpdatePlayerRegisteredItemDto } from './dto/update-player-registered-item.dto';

@Controller('player-registered-items')
export class PlayerRegisteredItemsController {
  constructor(private readonly playerRegisteredItemsService: PlayerRegisteredItemsService) {}

  @Post()
  create(@Body() createPlayerRegisteredItemDto: CreatePlayerRegisteredItemDto) {
    return this.playerRegisteredItemsService.create(createPlayerRegisteredItemDto);
  }

  @Get()
  findAll() {
    return this.playerRegisteredItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerRegisteredItemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerRegisteredItemDto: UpdatePlayerRegisteredItemDto) {
    return this.playerRegisteredItemsService.update(+id, updatePlayerRegisteredItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerRegisteredItemsService.remove(+id);
  }
}
