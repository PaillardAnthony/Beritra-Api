import { CreatePlayerCpDto } from './dto/create-player-cp.dto';
import { UpdatePlayerCpDto } from './dto/update-player-cp.dto';
export declare class PlayerCpsService {
    create(createPlayerCpDto: CreatePlayerCpDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerCpDto: UpdatePlayerCpDto): string;
    remove(id: number): string;
}
