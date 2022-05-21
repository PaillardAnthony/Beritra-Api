import { BlocksService } from './blocks.service';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
export declare class BlocksController {
    private readonly blocksService;
    constructor(blocksService: BlocksService);
    create(createBlockDto: CreateBlockDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBlockDto: UpdateBlockDto): string;
    remove(id: string): string;
}
