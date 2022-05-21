import { AbyssRanksService } from './abyss-ranks.service';
import { CreateAbyssRankDto } from './dto/create-abyss-rank.dto';
import { UpdateAbyssRankDto } from './dto/update-abyss-rank.dto';
export declare class AbyssRanksController {
    private readonly abyssRanksService;
    constructor(abyssRanksService: AbyssRanksService);
    create(createAbyssRankDto: CreateAbyssRankDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAbyssRankDto: UpdateAbyssRankDto): string;
    remove(id: string): string;
}
