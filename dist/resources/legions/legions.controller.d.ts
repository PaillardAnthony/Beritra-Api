import { LegionsService } from './legions.service';
import { CreateLegionDto } from './dto/create-legion.dto';
import { UpdateLegionDto } from './dto/update-legion.dto';
export declare class LegionsController {
    private readonly legionsService;
    constructor(legionsService: LegionsService);
    create(createLegionDto: CreateLegionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLegionDto: UpdateLegionDto): string;
    remove(id: string): string;
}
