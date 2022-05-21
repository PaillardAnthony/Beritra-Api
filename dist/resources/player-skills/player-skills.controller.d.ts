import { PlayerSkillsService } from './player-skills.service';
import { CreatePlayerSkillDto } from './dto/create-player-skill.dto';
import { UpdatePlayerSkillDto } from './dto/update-player-skill.dto';
export declare class PlayerSkillsController {
    private readonly playerSkillsService;
    constructor(playerSkillsService: PlayerSkillsService);
    create(createPlayerSkillDto: CreatePlayerSkillDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerSkillDto: UpdatePlayerSkillDto): string;
    remove(id: string): string;
}
