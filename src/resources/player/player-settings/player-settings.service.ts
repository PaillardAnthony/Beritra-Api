import { Injectable } from '@nestjs/common';
import { CreatePlayerSettingDto } from './dto/create-player-setting.dto';
import { UpdatePlayerSettingDto } from './dto/update-player-setting.dto';

@Injectable()
export class PlayerSettingsService {
  create(createPlayerSettingDto: CreatePlayerSettingDto) {
    return 'This action adds a new playerSetting';
  }

  findAll() {
    return `This action returns all playerSettings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerSetting`;
  }

  update(id: number, updatePlayerSettingDto: UpdatePlayerSettingDto) {
    return `This action updates a #${id} playerSetting`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerSetting`;
  }
}
