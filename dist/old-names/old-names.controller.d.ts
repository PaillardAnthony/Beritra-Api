import { OldNamesService } from './old-names.service';
import { CreateOldNameDto } from './dto/create-old-name.dto';
import { UpdateOldNameDto } from './dto/update-old-name.dto';
export declare class OldNamesController {
    private readonly oldNamesService;
    constructor(oldNamesService: OldNamesService);
    create(createOldNameDto: CreateOldNameDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOldNameDto: UpdateOldNameDto): string;
    remove(id: string): string;
}
