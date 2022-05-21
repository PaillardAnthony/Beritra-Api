import { Injectable } from '@nestjs/common';
import { CreateOldNameDto } from './dto/create-old-name.dto';
import { UpdateOldNameDto } from './dto/update-old-name.dto';

@Injectable()
export class OldNamesService {
  create(createOldNameDto: CreateOldNameDto) {
    return 'This action adds a new oldName';
  }

  findAll() {
    return `This action returns all oldNames`;
  }

  findOne(id: number) {
    return `This action returns a #${id} oldName`;
  }

  update(id: number, updateOldNameDto: UpdateOldNameDto) {
    return `This action updates a #${id} oldName`;
  }

  remove(id: number) {
    return `This action removes a #${id} oldName`;
  }
}
