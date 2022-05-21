import { PartialType } from '@nestjs/swagger';
import { CreatePlayerEmotionDto } from './create-player-emotion.dto';

export class UpdatePlayerEmotionDto extends PartialType(CreatePlayerEmotionDto) {}
