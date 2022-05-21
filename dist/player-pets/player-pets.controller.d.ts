import { PlayerPetsService } from './player-pets.service';
import { CreatePlayerPetDto } from './dto/create-player-pet.dto';
import { UpdatePlayerPetDto } from './dto/update-player-pet.dto';
export declare class PlayerPetsController {
    private readonly playerPetsService;
    constructor(playerPetsService: PlayerPetsService);
    create(createPlayerPetDto: CreatePlayerPetDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerPetDto: UpdatePlayerPetDto): string;
    remove(id: string): string;
}
