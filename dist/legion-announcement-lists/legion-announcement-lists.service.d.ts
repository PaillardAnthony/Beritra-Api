import { CreateLegionAnnouncementListDto } from './dto/create-legion-announcement-list.dto';
import { UpdateLegionAnnouncementListDto } from './dto/update-legion-announcement-list.dto';
export declare class LegionAnnouncementListsService {
    create(createLegionAnnouncementListDto: CreateLegionAnnouncementListDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLegionAnnouncementListDto: UpdateLegionAnnouncementListDto): string;
    remove(id: number): string;
}
