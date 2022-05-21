import { CreatePlayerRegisteredItemDto } from './dto/create-player-registered-item.dto';
import { UpdatePlayerRegisteredItemDto } from './dto/update-player-registered-item.dto';
export declare class PlayerRegisteredItemsService {
    create(createPlayerRegisteredItemDto: CreatePlayerRegisteredItemDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerRegisteredItemDto: UpdatePlayerRegisteredItemDto): string;
    remove(id: number): string;
}
