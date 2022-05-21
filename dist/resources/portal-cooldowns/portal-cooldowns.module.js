"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalCooldownsModule = void 0;
const common_1 = require("@nestjs/common");
const portal_cooldowns_service_1 = require("./portal-cooldowns.service");
const portal_cooldowns_controller_1 = require("./portal-cooldowns.controller");
const typeorm_1 = require("@nestjs/typeorm");
const PortalCooldowns_1 = require("../../entities/PortalCooldowns");
let PortalCooldownsModule = class PortalCooldownsModule {
};
PortalCooldownsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([PortalCooldowns_1.PortalCooldowns])],
        controllers: [portal_cooldowns_controller_1.PortalCooldownsController],
        providers: [portal_cooldowns_service_1.PortalCooldownsService]
    })
], PortalCooldownsModule);
exports.PortalCooldownsModule = PortalCooldownsModule;
//# sourceMappingURL=portal-cooldowns.module.js.map