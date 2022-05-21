import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OldNamesService } from './old-names.service';
import { CreateOldNameDto } from './dto/create-old-name.dto';
import { UpdateOldNameDto } from './dto/update-old-name.dto';

@Controller('old-names')
export class OldNamesController {
  constructor(private readonly oldNamesService: OldNamesService) {}

  @Post()
  create(@Body() createOldNameDto: CreateOldNameDto) {
    return this.oldNamesService.create(createOldNameDto);
  }

  @Get()
  findAll() {
    return this.oldNamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oldNamesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOldNameDto: UpdateOldNameDto) {
    return this.oldNamesService.update(+id, updateOldNameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oldNamesService.remove(+id);
  }
}
