import { PlayerRecipesService } from './player-recipes.service';
import { CreatePlayerRecipeDto } from './dto/create-player-recipe.dto';
import { UpdatePlayerRecipeDto } from './dto/update-player-recipe.dto';
export declare class PlayerRecipesController {
    private readonly playerRecipesService;
    constructor(playerRecipesService: PlayerRecipesService);
    create(createPlayerRecipeDto: CreatePlayerRecipeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerRecipeDto: UpdatePlayerRecipeDto): string;
    remove(id: string): string;
}
