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
exports.PortalCooldownsController = void 0;
const common_1 = require("@nestjs/common");
const portal_cooldowns_service_1 = require("./portal-cooldowns.service");
const create_portal_cooldown_dto_1 = require("./dto/create-portal-cooldown.dto");
const update_portal_cooldown_dto_1 = require("./dto/update-portal-cooldown.dto");
let PortalCooldownsController = class PortalCooldownsController {
    constructor(portalCooldownsService) {
        this.portalCooldownsService = portalCooldownsService;
    }
    create(createPortalCooldownDto) {
        return this.portalCooldownsService.create(createPortalCooldownDto);
    }
    findAll() {
        return this.portalCooldownsService.findAll();
    }
    findOne(id) {
        return this.portalCooldownsService.findOne(+id);
    }
    update(id, updatePortalCooldownDto) {
        return this.portalCooldownsService.update(+id, updatePortalCooldownDto);
    }
    remove(id) {
        return this.portalCooldownsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_portal_cooldown_dto_1.CreatePortalCooldownDto]),
    __metadata("design:returntype", void 0)
], PortalCooldownsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PortalCooldownsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PortalCooldownsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_portal_cooldown_dto_1.UpdatePortalCooldownDto]),
    __metadata("design:returntype", void 0)
], PortalCooldownsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PortalCooldownsController.prototype, "remove", null);
PortalCooldownsController = __decorate([
    (0, common_1.Controller)('portal-cooldowns'),
    __metadata("design:paramtypes", [portal_cooldowns_service_1.PortalCooldownsService])
], PortalCooldownsController);
exports.PortalCooldownsController = PortalCooldownsController;
//# sourceMappingURL=portal-cooldowns.controller.js.map