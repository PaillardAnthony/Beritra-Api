import { PartialType } from '@nestjs/swagger';
import { CreateEventItemDto } from './create-event-item.dto';

export class UpdateEventItemDto extends PartialType(CreateEventItemDto) {}
