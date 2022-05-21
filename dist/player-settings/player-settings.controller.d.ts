import { PlayerSettingsService } from './player-settings.service';
import { CreatePlayerSettingDto } from './dto/create-player-setting.dto';
import { UpdatePlayerSettingDto } from './dto/update-player-setting.dto';
export declare class PlayerSettingsController {
    private readonly playerSettingsService;
    constructor(playerSettingsService: PlayerSettingsService);
    create(createPlayerSettingDto: CreatePlayerSettingDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerSettingDto: UpdatePlayerSettingDto): string;
    remove(id: string): string;
}
