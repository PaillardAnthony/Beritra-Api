import { CreateBannedIpDto } from './dto/create-banned-ip.dto';
import { UpdateBannedIpDto } from './dto/update-banned-ip.dto';
export declare class BannedIpService {
    create(createBannedIpDto: CreateBannedIpDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBannedIpDto: UpdateBannedIpDto): string;
    remove(id: number): string;
}
