import { PartialType } from '@nestjs/swagger';
import { CreatePlayerQuestDto } from './create-player-quest.dto';

export class UpdatePlayerQuestDto extends PartialType(CreatePlayerQuestDto) {}
