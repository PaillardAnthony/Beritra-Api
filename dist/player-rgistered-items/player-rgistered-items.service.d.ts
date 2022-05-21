import { CreatePlayerRgisteredItemDto } from './dto/create-player-rgistered-item.dto';
import { UpdatePlayerRgisteredItemDto } from './dto/update-player-rgistered-item.dto';
export declare class PlayerRgisteredItemsService {
    create(createPlayerRgisteredItemDto: CreatePlayerRgisteredItemDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerRgisteredItemDto: UpdatePlayerRgisteredItemDto): string;
    remove(id: number): string;
}
