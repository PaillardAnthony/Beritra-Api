import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CraftCooldownsService } from './craft-cooldowns.service';
import { CreateCraftCooldownDto } from './dto/create-craft-cooldown.dto';
import { UpdateCraftCooldownDto } from './dto/update-craft-cooldown.dto';

@Controller('craft-cooldowns')
export class CraftCooldownsController {
  constructor(private readonly craftCooldownsService: CraftCooldownsService) {}

  @Post()
  create(@Body() createCraftCooldownDto: CreateCraftCooldownDto) {
    return this.craftCooldownsService.create(createCraftCooldownDto);
  }

  @Get()
  findAll() {
    return this.craftCooldownsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.craftCooldownsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCraftCooldownDto: UpdateCraftCooldownDto) {
    return this.craftCooldownsService.update(+id, updateCraftCooldownDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.craftCooldownsService.remove(+id);
  }
}
