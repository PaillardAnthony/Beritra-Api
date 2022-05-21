import { PartialType } from '@nestjs/swagger';
import { CreateLegionEmblemDto } from './create-legion-emblem.dto';

export class UpdateLegionEmblemDto extends PartialType(CreateLegionEmblemDto) {}
