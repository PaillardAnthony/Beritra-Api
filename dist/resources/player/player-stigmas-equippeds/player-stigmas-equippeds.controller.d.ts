import { PlayerStigmasEquippedsService } from './player-stigmas-equippeds.service';
import { CreatePlayerStigmasEquippedDto } from './dto/create-player-stigmas-equipped.dto';
import { UpdatePlayerStigmasEquippedDto } from './dto/update-player-stigmas-equipped.dto';
export declare class PlayerStigmasEquippedsController {
    private readonly playerStigmasEquippedsService;
    constructor(playerStigmasEquippedsService: PlayerStigmasEquippedsService);
    create(createPlayerStigmasEquippedDto: CreatePlayerStigmasEquippedDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerStigmasEquippedDto: UpdatePlayerStigmasEquippedDto): string;
    remove(id: string): string;
}
