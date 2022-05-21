import { PlayerMacrossesService } from './player-macrosses.service';
import { CreatePlayerMacrossDto } from './dto/create-player-macross.dto';
import { UpdatePlayerMacrossDto } from './dto/update-player-macross.dto';
export declare class PlayerMacrossesController {
    private readonly playerMacrossesService;
    constructor(playerMacrossesService: PlayerMacrossesService);
    create(createPlayerMacrossDto: CreatePlayerMacrossDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerMacrossDto: UpdatePlayerMacrossDto): string;
    remove(id: string): string;
}
