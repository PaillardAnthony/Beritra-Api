import { PlayerBindPointService } from './player-bind-point.service';
import { CreatePlayerBindPointDto } from './dto/create-player-bind-point.dto';
import { UpdatePlayerBindPointDto } from './dto/update-player-bind-point.dto';
export declare class PlayerBindPointController {
    private readonly playerBindPointService;
    constructor(playerBindPointService: PlayerBindPointService);
    create(createPlayerBindPointDto: CreatePlayerBindPointDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerBindPointDto: UpdatePlayerBindPointDto): string;
    remove(id: string): string;
}
