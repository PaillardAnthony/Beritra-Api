import { BannedMacService } from './banned-mac.service';
import { CreateBannedMacDto } from './dto/create-banned-mac.dto';
import { UpdateBannedMacDto } from './dto/update-banned-mac.dto';
export declare class BannedMacController {
    private readonly bannedMacService;
    constructor(bannedMacService: BannedMacService);
    create(createBannedMacDto: CreateBannedMacDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBannedMacDto: UpdateBannedMacDto): string;
    remove(id: string): string;
}
