import { CreatePortalCooldownDto } from './dto/create-portal-cooldown.dto';
import { UpdatePortalCooldownDto } from './dto/update-portal-cooldown.dto';
export declare class PortalCooldownsService {
    create(createPortalCooldownDto: CreatePortalCooldownDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePortalCooldownDto: UpdatePortalCooldownDto): string;
    remove(id: number): string;
}
