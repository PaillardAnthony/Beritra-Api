"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePlayerPetDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_player_pet_dto_1 = require("./create-player-pet.dto");
class UpdatePlayerPetDto extends (0, swagger_1.PartialType)(create_player_pet_dto_1.CreatePlayerPetDto) {
}
exports.UpdatePlayerPetDto = UpdatePlayerPetDto;
//# sourceMappingURL=update-player-pet.dto.js.map