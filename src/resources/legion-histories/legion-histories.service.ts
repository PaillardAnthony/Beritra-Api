import { Injectable } from '@nestjs/common';
import { CreateLegionHistoryDto } from './dto/create-legion-history.dto';
import { UpdateLegionHistoryDto } from './dto/update-legion-history.dto';

@Injectable()
export class LegionHistoriesService {
  create(createLegionHistoryDto: CreateLegionHistoryDto) {
    return 'This action adds a new legionHistory';
  }

  findAll() {
    return `This action returns all legionHistories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} legionHistory`;
  }

  update(id: number, updateLegionHistoryDto: UpdateLegionHistoryDto) {
    return `This action updates a #${id} legionHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} legionHistory`;
  }
}
