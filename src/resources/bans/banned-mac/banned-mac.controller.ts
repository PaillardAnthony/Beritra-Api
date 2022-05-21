import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BannedMacService } from './banned-mac.service';
import { CreateBannedMacDto } from './dto/create-banned-mac.dto';
import { UpdateBannedMacDto } from './dto/update-banned-mac.dto';

@Controller('banned-mac')
export class BannedMacController {
  constructor(private readonly bannedMacService: BannedMacService) {}

  @Post()
  create(@Body() createBannedMacDto: CreateBannedMacDto) {
    return this.bannedMacService.create(createBannedMacDto);
  }

  @Get()
  findAll() {
    return this.bannedMacService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bannedMacService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBannedMacDto: UpdateBannedMacDto) {
    return this.bannedMacService.update(+id, updateBannedMacDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bannedMacService.remove(+id);
  }
}
