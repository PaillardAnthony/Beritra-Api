import { CreatePlayerQuestDto } from './dto/create-player-quest.dto';
import { UpdatePlayerQuestDto } from './dto/update-player-quest.dto';
export declare class PlayerQuestsService {
    create(createPlayerQuestDto: CreatePlayerQuestDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerQuestDto: UpdatePlayerQuestDto): string;
    remove(id: number): string;
}
