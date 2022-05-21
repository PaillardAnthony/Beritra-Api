import { PartialType } from '@nestjs/swagger';
import { CreateItemCooldownDto } from './create-item-cooldown.dto';

export class UpdateItemCooldownDto extends PartialType(CreateItemCooldownDto) {}
