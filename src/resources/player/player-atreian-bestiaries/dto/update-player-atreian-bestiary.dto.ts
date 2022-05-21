import { PartialType } from '@nestjs/swagger';
import { CreatePlayerAtreianBestiaryDto } from './create-player-atreian-bestiary.dto';

export class UpdatePlayerAtreianBestiaryDto extends PartialType(CreatePlayerAtreianBestiaryDto) {}
