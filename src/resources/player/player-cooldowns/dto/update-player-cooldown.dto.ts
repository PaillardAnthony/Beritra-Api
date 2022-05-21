import { PartialType } from '@nestjs/swagger';
import { CreatePlayerCooldownDto } from './create-player-cooldown.dto';

export class UpdatePlayerCooldownDto extends PartialType(CreatePlayerCooldownDto) {}
