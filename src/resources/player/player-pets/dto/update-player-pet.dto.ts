import { PartialType } from '@nestjs/swagger';
import { CreatePlayerPetDto } from './create-player-pet.dto';

export class UpdatePlayerPetDto extends PartialType(CreatePlayerPetDto) {}
