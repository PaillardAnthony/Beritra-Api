import { CreatePlayerBindPointDto } from './dto/create-player-bind-point.dto';
import { UpdatePlayerBindPointDto } from './dto/update-player-bind-point.dto';
export declare class PlayerBindPointService {
    create(createPlayerBindPointDto: CreatePlayerBindPointDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerBindPointDto: UpdatePlayerBindPointDto): string;
    remove(id: number): string;
}
