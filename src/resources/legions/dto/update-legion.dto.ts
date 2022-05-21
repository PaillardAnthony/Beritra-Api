import { PartialType } from '@nestjs/swagger';
import { CreateLegionDto } from './create-legion.dto';

export class UpdateLegionDto extends PartialType(CreateLegionDto) {}
