import { PlayerAtreianBestiariesService } from './player-atreian-bestiaries.service';
import { CreatePlayerAtreianBestiaryDto } from './dto/create-player-atreian-bestiary.dto';
import { UpdatePlayerAtreianBestiaryDto } from './dto/update-player-atreian-bestiary.dto';
export declare class PlayerAtreianBestiariesController {
    private readonly playerAtreianBestiariesService;
    constructor(playerAtreianBestiariesService: PlayerAtreianBestiariesService);
    create(createPlayerAtreianBestiaryDto: CreatePlayerAtreianBestiaryDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerAtreianBestiaryDto: UpdatePlayerAtreianBestiaryDto): string;
    remove(id: string): string;
}
