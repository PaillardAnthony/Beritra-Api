import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PortalCooldownsService } from './portal-cooldowns.service';
import { CreatePortalCooldownDto } from './dto/create-portal-cooldown.dto';
import { UpdatePortalCooldownDto } from './dto/update-portal-cooldown.dto';

@Controller('portal-cooldowns')
export class PortalCooldownsController {
  constructor(private readonly portalCooldownsService: PortalCooldownsService) {}

  @Post()
  create(@Body() createPortalCooldownDto: CreatePortalCooldownDto) {
    return this.portalCooldownsService.create(createPortalCooldownDto);
  }

  @Get()
  findAll() {
    return this.portalCooldownsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.portalCooldownsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePortalCooldownDto: UpdatePortalCooldownDto) {
    return this.portalCooldownsService.update(+id, updatePortalCooldownDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.portalCooldownsService.remove(+id);
  }
}
