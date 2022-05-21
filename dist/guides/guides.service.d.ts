import { CreateGuideDto } from './dto/create-guide.dto';
import { UpdateGuideDto } from './dto/update-guide.dto';
export declare class GuidesService {
    create(createGuideDto: CreateGuideDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGuideDto: UpdateGuideDto): string;
    remove(id: number): string;
}
