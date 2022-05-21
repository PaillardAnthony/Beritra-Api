import { CreatePlayerMotionDto } from './dto/create-player-motion.dto';
import { UpdatePlayerMotionDto } from './dto/update-player-motion.dto';
export declare class PlayerMotionsService {
    create(createPlayerMotionDto: CreatePlayerMotionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerMotionDto: UpdatePlayerMotionDto): string;
    remove(id: number): string;
}
