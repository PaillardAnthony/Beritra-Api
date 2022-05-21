import { Injectable } from '@nestjs/common';
import { CreateLegionEmblemDto } from './dto/create-legion-emblem.dto';
import { UpdateLegionEmblemDto } from './dto/update-legion-emblem.dto';

@Injectable()
export class LegionEmblemsService {
  create(createLegionEmblemDto: CreateLegionEmblemDto) {
    return 'This action adds a new legionEmblem';
  }

  findAll() {
    return `This action returns all legionEmblems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} legionEmblem`;
  }

  update(id: number, updateLegionEmblemDto: UpdateLegionEmblemDto) {
    return `This action updates a #${id} legionEmblem`;
  }

  remove(id: number) {
    return `This action removes a #${id} legionEmblem`;
  }
}
