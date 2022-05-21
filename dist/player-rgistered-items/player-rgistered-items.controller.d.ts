import { PlayerRgisteredItemsService } from './player-rgistered-items.service';
import { CreatePlayerRgisteredItemDto } from './dto/create-player-rgistered-item.dto';
import { UpdatePlayerRgisteredItemDto } from './dto/update-player-rgistered-item.dto';
export declare class PlayerRgisteredItemsController {
    private readonly playerRgisteredItemsService;
    constructor(playerRgisteredItemsService: PlayerRgisteredItemsService);
    create(createPlayerRgisteredItemDto: CreatePlayerRgisteredItemDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerRgisteredItemDto: UpdatePlayerRgisteredItemDto): string;
    remove(id: string): string;
}
