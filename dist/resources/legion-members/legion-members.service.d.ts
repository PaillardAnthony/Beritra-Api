import { CreateLegionMemberDto } from './dto/create-legion-member.dto';
import { UpdateLegionMemberDto } from './dto/update-legion-member.dto';
export declare class LegionMembersService {
    create(createLegionMemberDto: CreateLegionMemberDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLegionMemberDto: UpdateLegionMemberDto): string;
    remove(id: number): string;
}
