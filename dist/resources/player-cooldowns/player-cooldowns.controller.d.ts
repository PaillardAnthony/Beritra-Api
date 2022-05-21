import { PlayerCooldownsService } from './player-cooldowns.service';
import { CreatePlayerCooldownDto } from './dto/create-player-cooldown.dto';
import { UpdatePlayerCooldownDto } from './dto/update-player-cooldown.dto';
export declare class PlayerCooldownsController {
    private readonly playerCooldownsService;
    constructor(playerCooldownsService: PlayerCooldownsService);
    create(createPlayerCooldownDto: CreatePlayerCooldownDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerCooldownDto: UpdatePlayerCooldownDto): string;
    remove(id: string): string;
}
