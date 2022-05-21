import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LegionsService } from './legions.service';
import { CreateLegionDto } from './dto/create-legion.dto';
import { UpdateLegionDto } from './dto/update-legion.dto';

@Controller('legions')
export class LegionsController {
  constructor(private readonly legionsService: LegionsService) {}

  @Post()
  create(@Body() createLegionDto: CreateLegionDto) {
    return this.legionsService.create(createLegionDto);
  }

  @Get()
  findAll() {
    return this.legionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.legionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLegionDto: UpdateLegionDto) {
    return this.legionsService.update(+id, updateLegionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.legionsService.remove(+id);
  }
}
