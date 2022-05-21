import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
export declare class PlayersController {
    private readonly playersService;
    constructor(playersService: PlayersService);
    create(createPlayerDto: CreatePlayerDto): import("../../entities/Players").Players;
    findAll(): Promise<import("../../entities/Players").Players[]>;
    findOne(id: string): Promise<import("../../entities/Players").Players>;
    update(id: string, updatePlayerDto: UpdatePlayerDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
