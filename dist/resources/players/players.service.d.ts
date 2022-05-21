import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Repository } from "typeorm";
import { Players } from "../../entities/Players";
export declare class PlayersService {
    private repository;
    constructor(repository: Repository<Players>);
    create(createPlayerDto: CreatePlayerDto): Players;
    findAll(): Promise<Players[]>;
    findOne(id: number): Promise<Players>;
    update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
