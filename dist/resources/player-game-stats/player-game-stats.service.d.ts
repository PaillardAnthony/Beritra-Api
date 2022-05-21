import { CreatePlayerGameStatDto } from './dto/create-player-game-stat.dto';
import { UpdatePlayerGameStatDto } from './dto/update-player-game-stat.dto';
export declare class PlayerGameStatsService {
    create(createPlayerGameStatDto: CreatePlayerGameStatDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerGameStatDto: UpdatePlayerGameStatDto): string;
    remove(id: number): string;
}
