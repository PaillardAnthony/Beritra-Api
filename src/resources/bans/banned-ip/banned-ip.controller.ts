import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BannedIpService } from './banned-ip.service';
import { CreateBannedIpDto } from './dto/create-banned-ip.dto';
import { UpdateBannedIpDto } from './dto/update-banned-ip.dto';

@Controller('banned-ip')
export class BannedIpController {
  constructor(private readonly bannedIpService: BannedIpService) {}

  @Post()
  create(@Body() createBannedIpDto: CreateBannedIpDto) {
    return this.bannedIpService.create(createBannedIpDto);
  }

  @Get()
  findAll() {
    return this.bannedIpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bannedIpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBannedIpDto: UpdateBannedIpDto) {
    return this.bannedIpService.update(+id, updateBannedIpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bannedIpService.remove(+id);
  }
}
