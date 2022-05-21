import { PlayerNpcFactionsService } from './player-npc-factions.service';
import { CreatePlayerNpcFactionDto } from './dto/create-player-npc-faction.dto';
import { UpdatePlayerNpcFactionDto } from './dto/update-player-npc-faction.dto';
export declare class PlayerNpcFactionsController {
    private readonly playerNpcFactionsService;
    constructor(playerNpcFactionsService: PlayerNpcFactionsService);
    create(createPlayerNpcFactionDto: CreatePlayerNpcFactionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerNpcFactionDto: UpdatePlayerNpcFactionDto): string;
    remove(id: string): string;
}
