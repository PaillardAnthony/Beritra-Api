import { PartialType } from '@nestjs/swagger';
import { CreatePlayerSettingDto } from './create-player-setting.dto';

export class UpdatePlayerSettingDto extends PartialType(CreatePlayerSettingDto) {}
