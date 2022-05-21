import { CreatePlayerAppearanceDto } from './dto/create-player-appearance.dto';
import { UpdatePlayerAppearanceDto } from './dto/update-player-appearance.dto';
export declare class PlayerAppearanceService {
    create(createPlayerAppearanceDto: CreatePlayerAppearanceDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerAppearanceDto: UpdatePlayerAppearanceDto): string;
    remove(id: number): string;
}
