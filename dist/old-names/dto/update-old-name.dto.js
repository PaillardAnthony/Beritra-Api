"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOldNameDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_old_name_dto_1 = require("./create-old-name.dto");
class UpdateOldNameDto extends (0, swagger_1.PartialType)(create_old_name_dto_1.CreateOldNameDto) {
}
exports.UpdateOldNameDto = UpdateOldNameDto;
//# sourceMappingURL=update-old-name.dto.js.map