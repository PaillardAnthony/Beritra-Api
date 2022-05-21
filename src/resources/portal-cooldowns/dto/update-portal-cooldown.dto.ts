import { PartialType } from '@nestjs/swagger';
import { CreatePortalCooldownDto } from './create-portal-cooldown.dto';

export class UpdatePortalCooldownDto extends PartialType(CreatePortalCooldownDto) {}
