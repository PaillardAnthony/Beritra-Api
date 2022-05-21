"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventItemsController = void 0;
const common_1 = require("@nestjs/common");
const event_items_service_1 = require("./event-items.service");
const create_event_item_dto_1 = require("./dto/create-event-item.dto");
const update_event_item_dto_1 = require("./dto/update-event-item.dto");
let EventItemsController = class EventItemsController {
    constructor(eventItemsService) {
        this.eventItemsService = eventItemsService;
    }
    create(createEventItemDto) {
        return this.eventItemsService.create(createEventItemDto);
    }
    findAll() {
        return this.eventItemsService.findAll();
    }
    findOne(id) {
        return this.eventItemsService.findOne(+id);
    }
    update(id, updateEventItemDto) {
        return this.eventItemsService.update(+id, updateEventItemDto);
    }
    remove(id) {
        return this.eventItemsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_event_item_dto_1.CreateEventItemDto]),
    __metadata("design:returntype", void 0)
], EventItemsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventItemsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventItemsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_event_item_dto_1.UpdateEventItemDto]),
    __metadata("design:returntype", void 0)
], EventItemsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventItemsController.prototype, "remove", null);
EventItemsController = __decorate([
    (0, common_1.Controller)('event-items'),
    __metadata("design:paramtypes", [event_items_service_1.EventItemsService])
], EventItemsController);
exports.EventItemsController = EventItemsController;
//# sourceMappingURL=event-items.controller.js.map