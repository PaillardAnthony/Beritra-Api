import { PartialType } from '@nestjs/swagger';
import { CreatePlayerAppearanceDto } from './create-player-appearance.dto';

export class UpdatePlayerAppearanceDto extends PartialType(CreatePlayerAppearanceDto) {}
