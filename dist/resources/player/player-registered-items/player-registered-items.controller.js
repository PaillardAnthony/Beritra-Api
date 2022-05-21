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
exports.PlayerRegisteredItemsController = void 0;
const common_1 = require("@nestjs/common");
const player_registered_items_service_1 = require("./player-registered-items.service");
const create_player_registered_item_dto_1 = require("./dto/create-player-registered-item.dto");
const update_player_registered_item_dto_1 = require("./dto/update-player-registered-item.dto");
let PlayerRegisteredItemsController = class PlayerRegisteredItemsController {
    constructor(playerRegisteredItemsService) {
        this.playerRegisteredItemsService = playerRegisteredItemsService;
    }
    create(createPlayerRegisteredItemDto) {
        return this.playerRegisteredItemsService.create(createPlayerRegisteredItemDto);
    }
    findAll() {
        return this.playerRegisteredItemsService.findAll();
    }
    findOne(id) {
        return this.playerRegisteredItemsService.findOne(+id);
    }
    update(id, updatePlayerRegisteredItemDto) {
        return this.playerRegisteredItemsService.update(+id, updatePlayerRegisteredItemDto);
    }
    remove(id) {
        return this.playerRegisteredItemsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_player_registered_item_dto_1.CreatePlayerRegisteredItemDto]),
    __metadata("design:returntype", void 0)
], PlayerRegisteredItemsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayerRegisteredItemsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerRegisteredItemsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_player_registered_item_dto_1.UpdatePlayerRegisteredItemDto]),
    __metadata("design:returntype", void 0)
], PlayerRegisteredItemsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerRegisteredItemsController.prototype, "remove", null);
PlayerRegisteredItemsController = __decorate([
    (0, common_1.Controller)('player-registered-items'),
    __metadata("design:paramtypes", [player_registered_items_service_1.PlayerRegisteredItemsService])
], PlayerRegisteredItemsController);
exports.PlayerRegisteredItemsController = PlayerRegisteredItemsController;
//# sourceMappingURL=player-registered-items.controller.js.map