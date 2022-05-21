import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LegionAnnouncementListsService } from './legion-announcement-lists.service';
import { CreateLegionAnnouncementListDto } from './dto/create-legion-announcement-list.dto';
import { UpdateLegionAnnouncementListDto } from './dto/update-legion-announcement-list.dto';

@Controller('legion-announcement-lists')
export class LegionAnnouncementListsController {
  constructor(private readonly legionAnnouncementListsService: LegionAnnouncementListsService) {}

  @Post()
  create(@Body() createLegionAnnouncementListDto: CreateLegionAnnouncementListDto) {
    return this.legionAnnouncementListsService.create(createLegionAnnouncementListDto);
  }

  @Get()
  findAll() {
    return this.legionAnnouncementListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.legionAnnouncementListsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLegionAnnouncementListDto: UpdateLegionAnnouncementListDto) {
    return this.legionAnnouncementListsService.update(+id, updateLegionAnnouncementListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.legionAnnouncementListsService.remove(+id);
  }
}
