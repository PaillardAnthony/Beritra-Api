"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePlayerCpDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_player_cp_dto_1 = require("./create-player-cp.dto");
class UpdatePlayerCpDto extends (0, swagger_1.PartialType)(create_player_cp_dto_1.CreatePlayerCpDto) {
}
exports.UpdatePlayerCpDto = UpdatePlayerCpDto;
//# sourceMappingURL=update-player-cp.dto.js.map