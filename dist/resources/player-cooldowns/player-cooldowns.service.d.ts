import { CreatePlayerCooldownDto } from './dto/create-player-cooldown.dto';
import { UpdatePlayerCooldownDto } from './dto/update-player-cooldown.dto';
export declare class PlayerCooldownsService {
    create(createPlayerCooldownDto: CreatePlayerCooldownDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerCooldownDto: UpdatePlayerCooldownDto): string;
    remove(id: number): string;
}
