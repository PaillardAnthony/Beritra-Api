import { CreatePlayerEmotionDto } from './dto/create-player-emotion.dto';
import { UpdatePlayerEmotionDto } from './dto/update-player-emotion.dto';
export declare class PlayerEmotionsService {
    create(createPlayerEmotionDto: CreatePlayerEmotionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerEmotionDto: UpdatePlayerEmotionDto): string;
    remove(id: number): string;
}
