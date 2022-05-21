import { LegionHistoriesService } from './legion-histories.service';
import { CreateLegionHistoryDto } from './dto/create-legion-history.dto';
import { UpdateLegionHistoryDto } from './dto/update-legion-history.dto';
export declare class LegionHistoriesController {
    private readonly legionHistoriesService;
    constructor(legionHistoriesService: LegionHistoriesService);
    create(createLegionHistoryDto: CreateLegionHistoryDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLegionHistoryDto: UpdateLegionHistoryDto): string;
    remove(id: string): string;
}
