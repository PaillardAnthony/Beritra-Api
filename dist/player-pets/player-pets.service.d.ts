import { CreatePlayerPetDto } from './dto/create-player-pet.dto';
import { UpdatePlayerPetDto } from './dto/update-player-pet.dto';
export declare class PlayerPetsService {
    create(createPlayerPetDto: CreatePlayerPetDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerPetDto: UpdatePlayerPetDto): string;
    remove(id: number): string;
}
