import { CreateLegionDto } from './dto/create-legion.dto';
import { UpdateLegionDto } from './dto/update-legion.dto';
export declare class LegionsService {
    create(createLegionDto: CreateLegionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLegionDto: UpdateLegionDto): string;
    remove(id: number): string;
}
