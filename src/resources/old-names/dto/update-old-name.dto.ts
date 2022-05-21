import { PartialType } from '@nestjs/swagger';
import { CreateOldNameDto } from './create-old-name.dto';

export class UpdateOldNameDto extends PartialType(CreateOldNameDto) {}
