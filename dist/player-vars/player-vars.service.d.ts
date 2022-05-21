import { CreatePlayerVarDto } from './dto/create-player-var.dto';
import { UpdatePlayerVarDto } from './dto/update-player-var.dto';
export declare class PlayerVarsService {
    create(createPlayerVarDto: CreatePlayerVarDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerVarDto: UpdatePlayerVarDto): string;
    remove(id: number): string;
}
