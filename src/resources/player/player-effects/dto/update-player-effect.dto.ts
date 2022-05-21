import { PartialType } from '@nestjs/swagger';
import { CreatePlayerEffectDto } from './create-player-effect.dto';

export class UpdatePlayerEffectDto extends PartialType(CreatePlayerEffectDto) {}
