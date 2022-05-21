import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LegionEmblemsService } from './legion-emblems.service';
import { CreateLegionEmblemDto } from './dto/create-legion-emblem.dto';
import { UpdateLegionEmblemDto } from './dto/update-legion-emblem.dto';

@Controller('legion-emblems')
export class LegionEmblemsController {
  constructor(private readonly legionEmblemsService: LegionEmblemsService) {}

  @Post()
  create(@Body() createLegionEmblemDto: CreateLegionEmblemDto) {
    return this.legionEmblemsService.create(createLegionEmblemDto);
  }

  @Get()
  findAll() {
    return this.legionEmblemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.legionEmblemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLegionEmblemDto: UpdateLegionEmblemDto) {
    return this.legionEmblemsService.update(+id, updateLegionEmblemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.legionEmblemsService.remove(+id);
  }
}
