import { CreateAbyssRankDto } from './dto/create-abyss-rank.dto';
import { UpdateAbyssRankDto } from './dto/update-abyss-rank.dto';
export declare class AbyssRanksService {
    create(createAbyssRankDto: CreateAbyssRankDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAbyssRankDto: UpdateAbyssRankDto): string;
    remove(id: number): string;
}
