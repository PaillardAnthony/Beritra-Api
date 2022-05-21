import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LegionHistoriesService } from './legion-histories.service';
import { CreateLegionHistoryDto } from './dto/create-legion-history.dto';
import { UpdateLegionHistoryDto } from './dto/update-legion-history.dto';

@Controller('legion-histories')
export class LegionHistoriesController {
  constructor(private readonly legionHistoriesService: LegionHistoriesService) {}

  @Post()
  create(@Body() createLegionHistoryDto: CreateLegionHistoryDto) {
    return this.legionHistoriesService.create(createLegionHistoryDto);
  }

  @Get()
  findAll() {
    return this.legionHistoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.legionHistoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLegionHistoryDto: UpdateLegionHistoryDto) {
    return this.legionHistoriesService.update(+id, updateLegionHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.legionHistoriesService.remove(+id);
  }
}
