import { PartialType } from '@nestjs/swagger';
import { CreatePlayerRecipeDto } from './create-player-recipe.dto';

export class UpdatePlayerRecipeDto extends PartialType(CreatePlayerRecipeDto) {}
