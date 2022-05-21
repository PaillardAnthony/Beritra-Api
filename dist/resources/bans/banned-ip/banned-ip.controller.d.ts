import { BannedIpService } from './banned-ip.service';
import { CreateBannedIpDto } from './dto/create-banned-ip.dto';
import { UpdateBannedIpDto } from './dto/update-banned-ip.dto';
export declare class BannedIpController {
    private readonly bannedIpService;
    constructor(bannedIpService: BannedIpService);
    create(createBannedIpDto: CreateBannedIpDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBannedIpDto: UpdateBannedIpDto): string;
    remove(id: string): string;
}
