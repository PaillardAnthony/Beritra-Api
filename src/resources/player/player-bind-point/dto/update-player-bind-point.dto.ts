import { PartialType } from '@nestjs/swagger';
import { CreatePlayerBindPointDto } from './create-player-bind-point.dto';

export class UpdatePlayerBindPointDto extends PartialType(CreatePlayerBindPointDto) {}
