import { PartialType } from '@nestjs/swagger';
import { CreatePlayerTitleDto } from './create-player-title.dto';

export class UpdatePlayerTitleDto extends PartialType(CreatePlayerTitleDto) {}
