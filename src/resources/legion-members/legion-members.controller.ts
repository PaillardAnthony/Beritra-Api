import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LegionMembersService } from './legion-members.service';
import { CreateLegionMemberDto } from './dto/create-legion-member.dto';
import { UpdateLegionMemberDto } from './dto/update-legion-member.dto';

@Controller('legion-members')
export class LegionMembersController {
  constructor(private readonly legionMembersService: LegionMembersService) {}

  @Post()
  create(@Body() createLegionMemberDto: CreateLegionMemberDto) {
    return this.legionMembersService.create(createLegionMemberDto);
  }

  @Get()
  findAll() {
    return this.legionMembersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.legionMembersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLegionMemberDto: UpdateLegionMemberDto) {
    return this.legionMembersService.update(+id, updateLegionMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.legionMembersService.remove(+id);
  }
}
