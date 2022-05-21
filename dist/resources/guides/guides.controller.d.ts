import { GuidesService } from './guides.service';
import { CreateGuideDto } from './dto/create-guide.dto';
import { UpdateGuideDto } from './dto/update-guide.dto';
export declare class GuidesController {
    private readonly guidesService;
    constructor(guidesService: GuidesService);
    create(createGuideDto: CreateGuideDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGuideDto: UpdateGuideDto): string;
    remove(id: string): string;
}
