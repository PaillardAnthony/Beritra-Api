import { LegionEmblemsService } from './legion-emblems.service';
import { CreateLegionEmblemDto } from './dto/create-legion-emblem.dto';
import { UpdateLegionEmblemDto } from './dto/update-legion-emblem.dto';
export declare class LegionEmblemsController {
    private readonly legionEmblemsService;
    constructor(legionEmblemsService: LegionEmblemsService);
    create(createLegionEmblemDto: CreateLegionEmblemDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLegionEmblemDto: UpdateLegionEmblemDto): string;
    remove(id: string): string;
}
