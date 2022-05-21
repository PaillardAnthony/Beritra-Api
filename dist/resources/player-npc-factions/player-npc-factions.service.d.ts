import { CreatePlayerNpcFactionDto } from './dto/create-player-npc-faction.dto';
import { UpdatePlayerNpcFactionDto } from './dto/update-player-npc-faction.dto';
export declare class PlayerNpcFactionsService {
    create(createPlayerNpcFactionDto: CreatePlayerNpcFactionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerNpcFactionDto: UpdatePlayerNpcFactionDto): string;
    remove(id: number): string;
}
