import { PartialType } from '@nestjs/swagger';
import { CreatePlayerMacrossDto } from './create-player-macross.dto';

export class UpdatePlayerMacrossDto extends PartialType(CreatePlayerMacrossDto) {}
