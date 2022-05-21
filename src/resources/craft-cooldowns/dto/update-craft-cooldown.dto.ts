import { PartialType } from '@nestjs/swagger';
import { CreateCraftCooldownDto } from './create-craft-cooldown.dto';

export class UpdateCraftCooldownDto extends PartialType(CreateCraftCooldownDto) {}
