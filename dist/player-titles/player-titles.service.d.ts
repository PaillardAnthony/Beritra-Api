import { CreatePlayerTitleDto } from './dto/create-player-title.dto';
import { UpdatePlayerTitleDto } from './dto/update-player-title.dto';
export declare class PlayerTitlesService {
    create(createPlayerTitleDto: CreatePlayerTitleDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerTitleDto: UpdatePlayerTitleDto): string;
    remove(id: number): string;
}
