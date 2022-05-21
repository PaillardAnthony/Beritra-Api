"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBannedIpDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_banned_ip_dto_1 = require("./create-banned-ip.dto");
class UpdateBannedIpDto extends (0, swagger_1.PartialType)(create_banned_ip_dto_1.CreateBannedIpDto) {
}
exports.UpdateBannedIpDto = UpdateBannedIpDto;
//# sourceMappingURL=update-banned-ip.dto.js.map