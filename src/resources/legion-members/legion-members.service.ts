import { Injectable } from '@nestjs/common';
import { CreateLegionMemberDto } from './dto/create-legion-member.dto';
import { UpdateLegionMemberDto } from './dto/update-legion-member.dto';

@Injectable()
export class LegionMembersService {
  create(createLegionMemberDto: CreateLegionMemberDto) {
    return 'This action adds a new legionMember';
  }

  findAll() {
    return `This action returns all legionMembers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} legionMember`;
  }

  update(id: number, updateLegionMemberDto: UpdateLegionMemberDto) {
    return `This action updates a #${id} legionMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} legionMember`;
  }
}
