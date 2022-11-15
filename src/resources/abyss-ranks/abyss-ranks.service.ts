import { Injectable } from '@nestjs/common';
import { CreateAbyssRankDto } from './dto/create-abyss-rank.dto';
import { UpdateAbyssRankDto } from './dto/update-abyss-rank.dto';
import { AbyssRank } from './../../entities/AbyssRank';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AbyssRanksService {

constructor(@InjectRepository(AbyssRank) private repository: Repository<AbyssRank>) {}


  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateAbyssRankDto: UpdateAbyssRankDto) {
    return this.repository.update(id, updateAbyssRankDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
