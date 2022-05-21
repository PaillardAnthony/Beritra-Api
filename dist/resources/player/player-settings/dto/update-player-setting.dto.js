"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePlayerSettingDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_player_setting_dto_1 = require("./create-player-setting.dto");
class UpdatePlayerSettingDto extends (0, swagger_1.PartialType)(create_player_setting_dto_1.CreatePlayerSettingDto) {
}
exports.UpdatePlayerSettingDto = UpdatePlayerSettingDto;
//# sourceMappingURL=update-player-setting.dto.js.map