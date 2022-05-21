import { CreateOldNameDto } from './dto/create-old-name.dto';
import { UpdateOldNameDto } from './dto/update-old-name.dto';
export declare class OldNamesService {
    create(createOldNameDto: CreateOldNameDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOldNameDto: UpdateOldNameDto): string;
    remove(id: number): string;
}
