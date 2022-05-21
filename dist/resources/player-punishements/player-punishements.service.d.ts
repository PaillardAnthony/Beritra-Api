import { CreatePlayerPunishementDto } from './dto/create-player-punishement.dto';
import { UpdatePlayerPunishementDto } from './dto/update-player-punishement.dto';
export declare class PlayerPunishementsService {
    create(createPlayerPunishementDto: CreatePlayerPunishementDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerPunishementDto: UpdatePlayerPunishementDto): string;
    remove(id: number): string;
}
