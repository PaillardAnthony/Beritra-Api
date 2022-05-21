import { PartialType } from '@nestjs/swagger';
import { CreateWebRewardDto } from './create-web-reward.dto';

export class UpdateWebRewardDto extends PartialType(CreateWebRewardDto) {}
