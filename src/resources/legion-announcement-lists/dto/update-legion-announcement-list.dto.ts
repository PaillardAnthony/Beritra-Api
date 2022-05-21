import { PartialType } from '@nestjs/swagger';
import { CreateLegionAnnouncementListDto } from './create-legion-announcement-list.dto';

export class UpdateLegionAnnouncementListDto extends PartialType(CreateLegionAnnouncementListDto) {}
