import { AbyssRanksService } from './abyss-ranks.service';
import { UpdateAbyssRankDto } from './dto/update-abyss-rank.dto';
export declare class AbyssRanksController {
    private readonly abyssRanksService;
    constructor(abyssRanksService: AbyssRanksService);
    findAll(): Promise<import("../../entities/AbyssRank").AbyssRank[]>;
    findOne(id: string): Promise<import("../../entities/AbyssRank").AbyssRank>;
    update(id: string, updateAbyssRankDto: UpdateAbyssRankDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
