import { PlayerQuestsService } from './player-quests.service';
import { CreatePlayerQuestDto } from './dto/create-player-quest.dto';
import { UpdatePlayerQuestDto } from './dto/update-player-quest.dto';
export declare class PlayerQuestsController {
    private readonly playerQuestsService;
    constructor(playerQuestsService: PlayerQuestsService);
    create(createPlayerQuestDto: CreatePlayerQuestDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerQuestDto: UpdatePlayerQuestDto): string;
    remove(id: string): string;
}
