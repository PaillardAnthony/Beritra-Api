import { PartialType } from '@nestjs/swagger';
import { CreatePlayerMotionDto } from './create-player-motion.dto';

export class UpdatePlayerMotionDto extends PartialType(CreatePlayerMotionDto) {}
