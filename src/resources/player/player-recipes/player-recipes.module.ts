import { Module } from '@nestjs/common';
import { PlayerRecipesService } from './player-recipes.service';
import { PlayerRecipesController } from './player-recipes.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerRecipes} from "../../../entities/PlayerRecipes";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerRecipes])],
  controllers: [PlayerRecipesController],
  providers: [PlayerRecipesService]
})
export class PlayerRecipesModule {}
