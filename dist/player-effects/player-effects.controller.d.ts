import { PlayerEffectsService } from './player-effects.service';
import { CreatePlayerEffectDto } from './dto/create-player-effect.dto';
import { UpdatePlayerEffectDto } from './dto/update-player-effect.dto';
export declare class PlayerEffectsController {
    private readonly playerEffectsService;
    constructor(playerEffectsService: PlayerEffectsService);
    create(createPlayerEffectDto: CreatePlayerEffectDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerEffectDto: UpdatePlayerEffectDto): string;
    remove(id: string): string;
}
