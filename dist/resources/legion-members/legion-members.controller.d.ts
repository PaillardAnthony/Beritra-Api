import { LegionMembersService } from './legion-members.service';
import { CreateLegionMemberDto } from './dto/create-legion-member.dto';
import { UpdateLegionMemberDto } from './dto/update-legion-member.dto';
export declare class LegionMembersController {
    private readonly legionMembersService;
    constructor(legionMembersService: LegionMembersService);
    create(createLegionMemberDto: CreateLegionMemberDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLegionMemberDto: UpdateLegionMemberDto): string;
    remove(id: string): string;
}
