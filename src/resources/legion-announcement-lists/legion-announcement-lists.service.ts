import { Injectable } from '@nestjs/common';
import { CreateLegionAnnouncementListDto } from './dto/create-legion-announcement-list.dto';
import { UpdateLegionAnnouncementListDto } from './dto/update-legion-announcement-list.dto';

@Injectable()
export class LegionAnnouncementListsService {
  create(createLegionAnnouncementListDto: CreateLegionAnnouncementListDto) {
    return 'This action adds a new legionAnnouncementList';
  }

  findAll() {
    return `This action returns all legionAnnouncementLists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} legionAnnouncementList`;
  }

  update(id: number, updateLegionAnnouncementListDto: UpdateLegionAnnouncementListDto) {
    return `This action updates a #${id} legionAnnouncementList`;
  }

  remove(id: number) {
    return `This action removes a #${id} legionAnnouncementList`;
  }
}
