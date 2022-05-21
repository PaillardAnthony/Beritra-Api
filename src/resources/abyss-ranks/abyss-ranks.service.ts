import { Injectable } from '@nestjs/common';
import { CreateAbyssRankDto } from './dto/create-abyss-rank.dto';
import { UpdateAbyssRankDto } from './dto/update-abyss-rank.dto';

@Injectable()
export class AbyssRanksService {
  create(createAbyssRankDto: CreateAbyssRankDto) {
    return 'This action adds a new abyssRank';
  }

  findAll() {
    return `This action returns all abyssRanks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} abyssRank`;
  }

  update(id: number, updateAbyssRankDto: UpdateAbyssRankDto) {
    return `This action updates a #${id} abyssRank`;
  }

  remove(id: number) {
    return `This action removes a #${id} abyssRank`;
  }
}
