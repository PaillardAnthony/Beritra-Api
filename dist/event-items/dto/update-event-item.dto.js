"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEventItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_event_item_dto_1 = require("./create-event-item.dto");
class UpdateEventItemDto extends (0, swagger_1.PartialType)(create_event_item_dto_1.CreateEventItemDto) {
}
exports.UpdateEventItemDto = UpdateEventItemDto;
//# sourceMappingURL=update-event-item.dto.js.map