import { PartialType } from '@nestjs/swagger';
import { CreatePlayerRegisteredItemDto } from './create-player-registered-item.dto';

export class UpdatePlayerRegisteredItemDto extends PartialType(CreatePlayerRegisteredItemDto) {}
