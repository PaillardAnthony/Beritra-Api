import { PlayerWardrobesService } from './player-wardrobes.service';
import { CreatePlayerWardrobeDto } from './dto/create-player-wardrobe.dto';
import { UpdatePlayerWardrobeDto } from './dto/update-player-wardrobe.dto';
export declare class PlayerWardrobesController {
    private readonly playerWardrobesService;
    constructor(playerWardrobesService: PlayerWardrobesService);
    create(createPlayerWardrobeDto: CreatePlayerWardrobeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerWardrobeDto: UpdatePlayerWardrobeDto): string;
    remove(id: string): string;
}
