import { AbyssRanksService } from './abyss-ranks.service';
import { UpdateAbyssRankDto } from './dto/update-abyss-rank.dto';
export declare class AbyssRanksController {
    private readonly abyssRanksService;
    constructor(abyssRanksService: AbyssRanksService);
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAbyssRankDto: UpdateAbyssRankDto): string;
    remove(id: string): string;
}
