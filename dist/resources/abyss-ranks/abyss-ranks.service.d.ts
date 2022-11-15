import { UpdateAbyssRankDto } from './dto/update-abyss-rank.dto';
import { AbyssRank } from './../../entities/AbyssRank';
import { Repository } from 'typeorm';
export declare class AbyssRanksService {
    private repository;
    constructor(repository: Repository<AbyssRank>);
    findAll(): Promise<AbyssRank[]>;
    findOne(id: number): Promise<AbyssRank>;
    update(id: number, updateAbyssRankDto: UpdateAbyssRankDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
