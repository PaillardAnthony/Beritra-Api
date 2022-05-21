import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemCooldownsService } from './item-cooldowns.service';
import { CreateItemCooldownDto } from './dto/create-item-cooldown.dto';
import { UpdateItemCooldownDto } from './dto/update-item-cooldown.dto';

@Controller('item-cooldowns')
export class ItemCooldownsController {
  constructor(private readonly itemCooldownsService: ItemCooldownsService) {}

  @Post()
  create(@Body() createItemCooldownDto: CreateItemCooldownDto) {
    return this.itemCooldownsService.create(createItemCooldownDto);
  }

  @Get()
  findAll() {
    return this.itemCooldownsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemCooldownsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemCooldownDto: UpdateItemCooldownDto) {
    return this.itemCooldownsService.update(+id, updateItemCooldownDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemCooldownsService.remove(+id);
  }
}
