import { PlayerPunishementsService } from './player-punishements.service';
import { CreatePlayerPunishementDto } from './dto/create-player-punishement.dto';
import { UpdatePlayerPunishementDto } from './dto/update-player-punishement.dto';
export declare class PlayerPunishementsController {
    private readonly playerPunishementsService;
    constructor(playerPunishementsService: PlayerPunishementsService);
    create(createPlayerPunishementDto: CreatePlayerPunishementDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerPunishementDto: UpdatePlayerPunishementDto): string;
    remove(id: string): string;
}
