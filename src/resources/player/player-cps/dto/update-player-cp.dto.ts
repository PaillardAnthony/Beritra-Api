import { PartialType } from '@nestjs/swagger';
import { CreatePlayerCpDto } from './create-player-cp.dto';

export class UpdatePlayerCpDto extends PartialType(CreatePlayerCpDto) {}
