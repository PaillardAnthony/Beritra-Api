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
exports.ItemCooldownsController = void 0;
const common_1 = require("@nestjs/common");
const item_cooldowns_service_1 = require("./item-cooldowns.service");
const create_item_cooldown_dto_1 = require("./dto/create-item-cooldown.dto");
const update_item_cooldown_dto_1 = require("./dto/update-item-cooldown.dto");
let ItemCooldownsController = class ItemCooldownsController {
    constructor(itemCooldownsService) {
        this.itemCooldownsService = itemCooldownsService;
    }
    create(createItemCooldownDto) {
        return this.itemCooldownsService.create(createItemCooldownDto);
    }
    findAll() {
        return this.itemCooldownsService.findAll();
    }
    findOne(id) {
        return this.itemCooldownsService.findOne(+id);
    }
    update(id, updateItemCooldownDto) {
        return this.itemCooldownsService.update(+id, updateItemCooldownDto);
    }
    remove(id) {
        return this.itemCooldownsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_item_cooldown_dto_1.CreateItemCooldownDto]),
    __metadata("design:returntype", void 0)
], ItemCooldownsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ItemCooldownsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ItemCooldownsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_item_cooldown_dto_1.UpdateItemCooldownDto]),
    __metadata("design:returntype", void 0)
], ItemCooldownsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ItemCooldownsController.prototype, "remove", null);
ItemCooldownsController = __decorate([
    (0, common_1.Controller)('item-cooldowns'),
    __metadata("design:paramtypes", [item_cooldowns_service_1.ItemCooldownsService])
], ItemCooldownsController);
exports.ItemCooldownsController = ItemCooldownsController;
//# sourceMappingURL=item-cooldowns.controller.js.map