import { ItemCooldownsService } from './item-cooldowns.service';
import { CreateItemCooldownDto } from './dto/create-item-cooldown.dto';
import { UpdateItemCooldownDto } from './dto/update-item-cooldown.dto';
export declare class ItemCooldownsController {
    private readonly itemCooldownsService;
    constructor(itemCooldownsService: ItemCooldownsService);
    create(createItemCooldownDto: CreateItemCooldownDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateItemCooldownDto: UpdateItemCooldownDto): string;
    remove(id: string): string;
}
