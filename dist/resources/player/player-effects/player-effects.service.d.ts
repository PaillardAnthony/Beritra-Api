import { CreatePlayerEffectDto } from './dto/create-player-effect.dto';
import { UpdatePlayerEffectDto } from './dto/update-player-effect.dto';
export declare class PlayerEffectsService {
    create(createPlayerEffectDto: CreatePlayerEffectDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerEffectDto: UpdatePlayerEffectDto): string;
    remove(id: number): string;
}
