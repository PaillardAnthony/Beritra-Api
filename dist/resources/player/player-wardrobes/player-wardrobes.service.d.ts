import { CreatePlayerWardrobeDto } from './dto/create-player-wardrobe.dto';
import { UpdatePlayerWardrobeDto } from './dto/update-player-wardrobe.dto';
export declare class PlayerWardrobesService {
    create(createPlayerWardrobeDto: CreatePlayerWardrobeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerWardrobeDto: UpdatePlayerWardrobeDto): string;
    remove(id: number): string;
}
