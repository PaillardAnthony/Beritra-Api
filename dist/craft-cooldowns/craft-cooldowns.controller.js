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
exports.CraftCooldownsController = void 0;
const common_1 = require("@nestjs/common");
const craft_cooldowns_service_1 = require("./craft-cooldowns.service");
const create_craft_cooldown_dto_1 = require("./dto/create-craft-cooldown.dto");
const update_craft_cooldown_dto_1 = require("./dto/update-craft-cooldown.dto");
let CraftCooldownsController = class CraftCooldownsController {
    constructor(craftCooldownsService) {
        this.craftCooldownsService = craftCooldownsService;
    }
    create(createCraftCooldownDto) {
        return this.craftCooldownsService.create(createCraftCooldownDto);
    }
    findAll() {
        return this.craftCooldownsService.findAll();
    }
    findOne(id) {
        return this.craftCooldownsService.findOne(+id);
    }
    update(id, updateCraftCooldownDto) {
        return this.craftCooldownsService.update(+id, updateCraftCooldownDto);
    }
    remove(id) {
        return this.craftCooldownsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_craft_cooldown_dto_1.CreateCraftCooldownDto]),
    __metadata("design:returntype", void 0)
], CraftCooldownsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CraftCooldownsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CraftCooldownsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_craft_cooldown_dto_1.UpdateCraftCooldownDto]),
    __metadata("design:returntype", void 0)
], CraftCooldownsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CraftCooldownsController.prototype, "remove", null);
CraftCooldownsController = __decorate([
    (0, common_1.Controller)('craft-cooldowns'),
    __metadata("design:paramtypes", [craft_cooldowns_service_1.CraftCooldownsService])
], CraftCooldownsController);
exports.CraftCooldownsController = CraftCooldownsController;
//# sourceMappingURL=craft-cooldowns.controller.js.map