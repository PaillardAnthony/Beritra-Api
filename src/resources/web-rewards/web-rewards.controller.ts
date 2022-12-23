import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebRewardsService } from './web-rewards.service';
import { CreateWebRewardDto } from './dto/create-web-reward.dto';
import { UpdateWebRewardDto } from './dto/update-web-reward.dto';
import { PlayersService } from '../player/players/players.service';
import { Players } from './../../entities/Players';

@Controller('web-rewards')
export class WebRewardsController {
  constructor(private readonly webRewardsService: WebRewardsService, private readonly playerService: PlayersService) {}

  @Post(':id')
  create(@Body() createWebRewardDto: CreateWebRewardDto) {
    return this.webRewardsService.create(createWebRewardDto);
  }

  @Get()
  findAll() {
    return this.webRewardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webRewardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWebRewardDto: UpdateWebRewardDto) {
    return this.webRewardsService.update(+id, updateWebRewardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webRewardsService.remove(+id);
  }

}
