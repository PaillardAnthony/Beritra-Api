import { PartialType } from '@nestjs/swagger';
import { CreateLegionMemberDto } from './create-legion-member.dto';

export class UpdateLegionMemberDto extends PartialType(CreateLegionMemberDto) {}
