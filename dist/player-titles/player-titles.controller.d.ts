import { PlayerTitlesService } from './player-titles.service';
import { CreatePlayerTitleDto } from './dto/create-player-title.dto';
import { UpdatePlayerTitleDto } from './dto/update-player-title.dto';
export declare class PlayerTitlesController {
    private readonly playerTitlesService;
    constructor(playerTitlesService: PlayerTitlesService);
    create(createPlayerTitleDto: CreatePlayerTitleDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerTitleDto: UpdatePlayerTitleDto): string;
    remove(id: string): string;
}
