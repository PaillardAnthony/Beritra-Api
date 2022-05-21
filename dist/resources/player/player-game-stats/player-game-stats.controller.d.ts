import { PlayerGameStatsService } from './player-game-stats.service';
import { CreatePlayerGameStatDto } from './dto/create-player-game-stat.dto';
import { UpdatePlayerGameStatDto } from './dto/update-player-game-stat.dto';
export declare class PlayerGameStatsController {
    private readonly playerGameStatsService;
    constructor(playerGameStatsService: PlayerGameStatsService);
    create(createPlayerGameStatDto: CreatePlayerGameStatDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerGameStatDto: UpdatePlayerGameStatDto): string;
    remove(id: string): string;
}
