import { PlayerAppearanceService } from './player-appearance.service';
import { CreatePlayerAppearanceDto } from './dto/create-player-appearance.dto';
import { UpdatePlayerAppearanceDto } from './dto/update-player-appearance.dto';
export declare class PlayerAppearanceController {
    private readonly playerAppearanceService;
    constructor(playerAppearanceService: PlayerAppearanceService);
    create(createPlayerAppearanceDto: CreatePlayerAppearanceDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerAppearanceDto: UpdatePlayerAppearanceDto): string;
    remove(id: string): string;
}
