import { Injectable } from '@nestjs/common';
import { CreateLegionDto } from './dto/create-legion.dto';
import { UpdateLegionDto } from './dto/update-legion.dto';

@Injectable()
export class LegionsService {
  create(createLegionDto: CreateLegionDto) {
    return 'This action adds a new legion';
  }

  findAll() {
    return `This action returns all legions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} legion`;
  }

  update(id: number, updateLegionDto: UpdateLegionDto) {
    return `This action updates a #${id} legion`;
  }

  remove(id: number) {
    return `This action removes a #${id} legion`;
  }
}
