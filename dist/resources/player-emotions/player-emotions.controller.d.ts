import { PlayerEmotionsService } from './player-emotions.service';
import { CreatePlayerEmotionDto } from './dto/create-player-emotion.dto';
import { UpdatePlayerEmotionDto } from './dto/update-player-emotion.dto';
export declare class PlayerEmotionsController {
    private readonly playerEmotionsService;
    constructor(playerEmotionsService: PlayerEmotionsService);
    create(createPlayerEmotionDto: CreatePlayerEmotionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerEmotionDto: UpdatePlayerEmotionDto): string;
    remove(id: string): string;
}
