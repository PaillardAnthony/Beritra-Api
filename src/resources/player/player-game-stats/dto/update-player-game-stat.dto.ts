import { PartialType } from '@nestjs/swagger';
import { CreatePlayerGameStatDto } from './create-player-game-stat.dto';

export class UpdatePlayerGameStatDto extends PartialType(CreatePlayerGameStatDto) {}
