"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalCooldownsService = void 0;
const common_1 = require("@nestjs/common");
let PortalCooldownsService = class PortalCooldownsService {
    create(createPortalCooldownDto) {
        return 'This action adds a new portalCooldown';
    }
    findAll() {
        return `This action returns all portalCooldowns`;
    }
    findOne(id) {
        return `This action returns a #${id} portalCooldown`;
    }
    update(id, updatePortalCooldownDto) {
        return `This action updates a #${id} portalCooldown`;
    }
    remove(id) {
        return `This action removes a #${id} portalCooldown`;
    }
};
PortalCooldownsService = __decorate([
    (0, common_1.Injectable)()
], PortalCooldownsService);
exports.PortalCooldownsService = PortalCooldownsService;
//# sourceMappingURL=portal-cooldowns.service.js.map