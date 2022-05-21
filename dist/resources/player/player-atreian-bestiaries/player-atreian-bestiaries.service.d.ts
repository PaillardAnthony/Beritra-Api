import { CreatePlayerAtreianBestiaryDto } from './dto/create-player-atreian-bestiary.dto';
import { UpdatePlayerAtreianBestiaryDto } from './dto/update-player-atreian-bestiary.dto';
export declare class PlayerAtreianBestiariesService {
    create(createPlayerAtreianBestiaryDto: CreatePlayerAtreianBestiaryDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerAtreianBestiaryDto: UpdatePlayerAtreianBestiaryDto): string;
    remove(id: number): string;
}
