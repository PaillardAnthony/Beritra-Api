import { PlayerCpsService } from './player-cps.service';
import { CreatePlayerCpDto } from './dto/create-player-cp.dto';
import { UpdatePlayerCpDto } from './dto/update-player-cp.dto';
export declare class PlayerCpsController {
    private readonly playerCpsService;
    constructor(playerCpsService: PlayerCpsService);
    create(createPlayerCpDto: CreatePlayerCpDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerCpDto: UpdatePlayerCpDto): string;
    remove(id: string): string;
}
