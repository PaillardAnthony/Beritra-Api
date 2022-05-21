import { CreatePlayerLifeStatDto } from './dto/create-player-life-stat.dto';
import { UpdatePlayerLifeStatDto } from './dto/update-player-life-stat.dto';
export declare class PlayerLifeStatsService {
    create(createPlayerLifeStatDto: CreatePlayerLifeStatDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerLifeStatDto: UpdatePlayerLifeStatDto): string;
    remove(id: number): string;
}
