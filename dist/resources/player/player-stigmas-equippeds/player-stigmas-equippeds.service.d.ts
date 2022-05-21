import { CreatePlayerStigmasEquippedDto } from './dto/create-player-stigmas-equipped.dto';
import { UpdatePlayerStigmasEquippedDto } from './dto/update-player-stigmas-equipped.dto';
export declare class PlayerStigmasEquippedsService {
    create(createPlayerStigmasEquippedDto: CreatePlayerStigmasEquippedDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerStigmasEquippedDto: UpdatePlayerStigmasEquippedDto): string;
    remove(id: number): string;
}
