import { PortalCooldownsService } from './portal-cooldowns.service';
import { CreatePortalCooldownDto } from './dto/create-portal-cooldown.dto';
import { UpdatePortalCooldownDto } from './dto/update-portal-cooldown.dto';
export declare class PortalCooldownsController {
    private readonly portalCooldownsService;
    constructor(portalCooldownsService: PortalCooldownsService);
    create(createPortalCooldownDto: CreatePortalCooldownDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePortalCooldownDto: UpdatePortalCooldownDto): string;
    remove(id: string): string;
}
