import { PartialType } from '@nestjs/swagger';
import { CreateLegionHistoryDto } from './create-legion-history.dto';

export class UpdateLegionHistoryDto extends PartialType(CreateLegionHistoryDto) {}
