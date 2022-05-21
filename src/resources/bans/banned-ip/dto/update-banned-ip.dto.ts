import { PartialType } from '@nestjs/swagger';
import { CreateBannedIpDto } from './create-banned-ip.dto';

export class UpdateBannedIpDto extends PartialType(CreateBannedIpDto) {}
