import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
export declare class BlocksService {
    create(createBlockDto: CreateBlockDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBlockDto: UpdateBlockDto): string;
    remove(id: number): string;
}
