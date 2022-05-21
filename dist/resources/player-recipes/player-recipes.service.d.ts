import { CreatePlayerRecipeDto } from './dto/create-player-recipe.dto';
import { UpdatePlayerRecipeDto } from './dto/update-player-recipe.dto';
export declare class PlayerRecipesService {
    create(createPlayerRecipeDto: CreatePlayerRecipeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerRecipeDto: UpdatePlayerRecipeDto): string;
    remove(id: number): string;
}
