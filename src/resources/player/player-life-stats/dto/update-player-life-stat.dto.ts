import { PartialType } from '@nestjs/swagger';
import { CreatePlayerLifeStatDto } from './create-player-life-stat.dto';

export class UpdatePlayerLifeStatDto extends PartialType(CreatePlayerLifeStatDto) {}
