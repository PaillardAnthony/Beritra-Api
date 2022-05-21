import { CreateItemCooldownDto } from './dto/create-item-cooldown.dto';
import { UpdateItemCooldownDto } from './dto/update-item-cooldown.dto';
export declare class ItemCooldownsService {
    create(createItemCooldownDto: CreateItemCooldownDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateItemCooldownDto: UpdateItemCooldownDto): string;
    remove(id: number): string;
}
