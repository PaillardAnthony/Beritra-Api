import { PartialType } from '@nestjs/swagger';
import { CreatePlayerPunishementDto } from './create-player-punishement.dto';

export class UpdatePlayerPunishementDto extends PartialType(CreatePlayerPunishementDto) {}
