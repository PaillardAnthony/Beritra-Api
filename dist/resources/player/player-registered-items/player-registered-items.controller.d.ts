import { PlayerRegisteredItemsService } from './player-registered-items.service';
import { CreatePlayerRegisteredItemDto } from './dto/create-player-registered-item.dto';
import { UpdatePlayerRegisteredItemDto } from './dto/update-player-registered-item.dto';
export declare class PlayerRegisteredItemsController {
    private readonly playerRegisteredItemsService;
    constructor(playerRegisteredItemsService: PlayerRegisteredItemsService);
    create(createPlayerRegisteredItemDto: CreatePlayerRegisteredItemDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerRegisteredItemDto: UpdatePlayerRegisteredItemDto): string;
    remove(id: string): string;
}
