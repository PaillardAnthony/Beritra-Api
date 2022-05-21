import { PlayerMotionsService } from './player-motions.service';
import { CreatePlayerMotionDto } from './dto/create-player-motion.dto';
import { UpdatePlayerMotionDto } from './dto/update-player-motion.dto';
export declare class PlayerMotionsController {
    private readonly playerMotionsService;
    constructor(playerMotionsService: PlayerMotionsService);
    create(createPlayerMotionDto: CreatePlayerMotionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerMotionDto: UpdatePlayerMotionDto): string;
    remove(id: string): string;
}
