import { CreatePlayerMacrossDto } from './dto/create-player-macross.dto';
import { UpdatePlayerMacrossDto } from './dto/update-player-macross.dto';
export declare class PlayerMacrossesService {
    create(createPlayerMacrossDto: CreatePlayerMacrossDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerMacrossDto: UpdatePlayerMacrossDto): string;
    remove(id: number): string;
}
