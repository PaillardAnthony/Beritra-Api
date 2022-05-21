import { CreateLegionHistoryDto } from './dto/create-legion-history.dto';
import { UpdateLegionHistoryDto } from './dto/update-legion-history.dto';
export declare class LegionHistoriesService {
    create(createLegionHistoryDto: CreateLegionHistoryDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLegionHistoryDto: UpdateLegionHistoryDto): string;
    remove(id: number): string;
}
