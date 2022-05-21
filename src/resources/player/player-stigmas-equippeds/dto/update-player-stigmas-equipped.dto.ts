import { PartialType } from '@nestjs/swagger';
import { CreatePlayerStigmasEquippedDto } from './create-player-stigmas-equipped.dto';

export class UpdatePlayerStigmasEquippedDto extends PartialType(CreatePlayerStigmasEquippedDto) {}
