import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerRecipesService } from './player-recipes.service';
import { CreatePlayerRecipeDto } from './dto/create-player-recipe.dto';
import { UpdatePlayerRecipeDto } from './dto/update-player-recipe.dto';

@Controller('player-recipes')
export class PlayerRecipesController {
  constructor(private readonly playerRecipesService: PlayerRecipesService) {}

  @Post()
  create(@Body() createPlayerRecipeDto: CreatePlayerRecipeDto) {
    return this.playerRecipesService.create(createPlayerRecipeDto);
  }

  @Get()
  findAll() {
    return this.playerRecipesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerRecipesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerRecipeDto: UpdatePlayerRecipeDto) {
    return this.playerRecipesService.update(+id, updatePlayerRecipeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerRecipesService.remove(+id);
  }
}
