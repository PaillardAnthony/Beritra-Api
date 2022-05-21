import { CreatePlayerSkillDto } from './dto/create-player-skill.dto';
import { UpdatePlayerSkillDto } from './dto/update-player-skill.dto';
export declare class PlayerSkillsService {
    create(createPlayerSkillDto: CreatePlayerSkillDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerSkillDto: UpdatePlayerSkillDto): string;
    remove(id: number): string;
}
