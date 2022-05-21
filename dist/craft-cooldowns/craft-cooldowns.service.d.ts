import { CreateCraftCooldownDto } from './dto/create-craft-cooldown.dto';
import { UpdateCraftCooldownDto } from './dto/update-craft-cooldown.dto';
export declare class CraftCooldownsService {
    create(createCraftCooldownDto: CreateCraftCooldownDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCraftCooldownDto: UpdateCraftCooldownDto): string;
    remove(id: number): string;
}
