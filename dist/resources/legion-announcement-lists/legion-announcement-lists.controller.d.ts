import { LegionAnnouncementListsService } from './legion-announcement-lists.service';
import { CreateLegionAnnouncementListDto } from './dto/create-legion-announcement-list.dto';
import { UpdateLegionAnnouncementListDto } from './dto/update-legion-announcement-list.dto';
export declare class LegionAnnouncementListsController {
    private readonly legionAnnouncementListsService;
    constructor(legionAnnouncementListsService: LegionAnnouncementListsService);
    create(createLegionAnnouncementListDto: CreateLegionAnnouncementListDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLegionAnnouncementListDto: UpdateLegionAnnouncementListDto): string;
    remove(id: string): string;
}
