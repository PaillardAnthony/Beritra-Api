import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AbyssRanksService } from './abyss-ranks.service';
import { UpdateAbyssRankDto } from './dto/update-abyss-rank.dto';
@ApiBearerAuth()
@Controller('abyss-ranks')
export class AbyssRanksController {
  constructor(private readonly abyssRanksService: AbyssRanksService) {}

  @Get()
  findAll() {
    return this.abyssRanksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.abyssRanksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAbyssRankDto: UpdateAbyssRankDto) {
    return this.abyssRanksService.update(+id, updateAbyssRankDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.abyssRanksService.remove(+id);
  }
}
