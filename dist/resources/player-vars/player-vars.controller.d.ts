import { PlayerVarsService } from './player-vars.service';
import { CreatePlayerVarDto } from './dto/create-player-var.dto';
import { UpdatePlayerVarDto } from './dto/update-player-var.dto';
export declare class PlayerVarsController {
    private readonly playerVarsService;
    constructor(playerVarsService: PlayerVarsService);
    create(createPlayerVarDto: CreatePlayerVarDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerVarDto: UpdatePlayerVarDto): string;
    remove(id: string): string;
}
