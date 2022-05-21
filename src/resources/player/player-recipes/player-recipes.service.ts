import { Injectable } from '@nestjs/common';
import { CreatePlayerRecipeDto } from './dto/create-player-recipe.dto';
import { UpdatePlayerRecipeDto } from './dto/update-player-recipe.dto';

@Injectable()
export class PlayerRecipesService {
  create(createPlayerRecipeDto: CreatePlayerRecipeDto) {
    return 'This action adds a new playerRecipe';
  }

  findAll() {
    return `This action returns all playerRecipes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerRecipe`;
  }

  update(id: number, updatePlayerRecipeDto: UpdatePlayerRecipeDto) {
    return `This action updates a #${id} playerRecipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerRecipe`;
  }
}
