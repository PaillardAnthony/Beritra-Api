import { PartialType } from '@nestjs/swagger';
import { CreateBannedMacDto } from './create-banned-mac.dto';

export class UpdateBannedMacDto extends PartialType(CreateBannedMacDto) {}
