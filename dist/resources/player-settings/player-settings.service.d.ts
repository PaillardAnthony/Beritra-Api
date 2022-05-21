import { CreatePlayerSettingDto } from './dto/create-player-setting.dto';
import { UpdatePlayerSettingDto } from './dto/update-player-setting.dto';
export declare class PlayerSettingsService {
    create(createPlayerSettingDto: CreatePlayerSettingDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlayerSettingDto: UpdatePlayerSettingDto): string;
    remove(id: number): string;
}
