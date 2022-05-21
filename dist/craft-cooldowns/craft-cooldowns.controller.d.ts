import { CraftCooldownsService } from './craft-cooldowns.service';
import { CreateCraftCooldownDto } from './dto/create-craft-cooldown.dto';
import { UpdateCraftCooldownDto } from './dto/update-craft-cooldown.dto';
export declare class CraftCooldownsController {
    private readonly craftCooldownsService;
    constructor(craftCooldownsService: CraftCooldownsService);
    create(createCraftCooldownDto: CreateCraftCooldownDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCraftCooldownDto: UpdateCraftCooldownDto): string;
    remove(id: string): string;
}
