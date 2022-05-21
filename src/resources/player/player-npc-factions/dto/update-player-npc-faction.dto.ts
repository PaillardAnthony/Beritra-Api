import { PartialType } from '@nestjs/swagger';
import { CreatePlayerNpcFactionDto } from './create-player-npc-faction.dto';

export class UpdatePlayerNpcFactionDto extends PartialType(CreatePlayerNpcFactionDto) {}
