"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLegionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_legion_dto_1 = require("./create-legion.dto");
class UpdateLegionDto extends (0, swagger_1.PartialType)(create_legion_dto_1.CreateLegionDto) {
}
exports.UpdateLegionDto = UpdateLegionDto;
//# sourceMappingURL=update-legion.dto.js.map