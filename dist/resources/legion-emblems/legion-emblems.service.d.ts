import { CreateLegionEmblemDto } from './dto/create-legion-emblem.dto';
import { UpdateLegionEmblemDto } from './dto/update-legion-emblem.dto';
export declare class LegionEmblemsService {
    create(createLegionEmblemDto: CreateLegionEmblemDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLegionEmblemDto: UpdateLegionEmblemDto): string;
    remove(id: number): string;
}
