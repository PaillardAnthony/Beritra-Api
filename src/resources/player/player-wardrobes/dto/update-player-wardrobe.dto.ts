import { PartialType } from '@nestjs/swagger';
import { CreatePlayerWardrobeDto } from './create-player-wardrobe.dto';

export class UpdatePlayerWardrobeDto extends PartialType(CreatePlayerWardrobeDto) {}
