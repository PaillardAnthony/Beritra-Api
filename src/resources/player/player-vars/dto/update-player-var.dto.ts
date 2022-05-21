import { PartialType } from '@nestjs/swagger';
import { CreatePlayerVarDto } from './create-player-var.dto';

export class UpdatePlayerVarDto extends PartialType(CreatePlayerVarDto) {}
