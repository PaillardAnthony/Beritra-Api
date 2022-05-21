import { CreateBannedMacDto } from './dto/create-banned-mac.dto';
import { UpdateBannedMacDto } from './dto/update-banned-mac.dto';
export declare class BannedMacService {
    create(createBannedMacDto: CreateBannedMacDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBannedMacDto: UpdateBannedMacDto): string;
    remove(id: number): string;
}
