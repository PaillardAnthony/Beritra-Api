import { PlayerLifeStatsService } from './player-life-stats.service';
import { CreatePlayerLifeStatDto } from './dto/create-player-life-stat.dto';
import { UpdatePlayerLifeStatDto } from './dto/update-player-life-stat.dto';
export declare class PlayerLifeStatsController {
    private readonly playerLifeStatsService;
    constructor(playerLifeStatsService: PlayerLifeStatsService);
    create(createPlayerLifeStatDto: CreatePlayerLifeStatDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerLifeStatDto: UpdatePlayerLifeStatDto): string;
    remove(id: string): string;
}
