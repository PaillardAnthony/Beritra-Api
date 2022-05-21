"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CraftCooldownsModule = void 0;
const common_1 = require("@nestjs/common");
const craft_cooldowns_service_1 = require("./craft-cooldowns.service");
const craft_cooldowns_controller_1 = require("./craft-cooldowns.controller");
const typeorm_1 = require("@nestjs/typeorm");
const CraftCooldowns_1 = require("../entities/CraftCooldowns");
let CraftCooldownsModule = class CraftCooldownsModule {
};
CraftCooldownsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([CraftCooldowns_1.CraftCooldowns])],
        controllers: [craft_cooldowns_controller_1.CraftCooldownsController],
        providers: [craft_cooldowns_service_1.CraftCooldownsService]
    })
], CraftCooldownsModule);
exports.CraftCooldownsModule = CraftCooldownsModule;
//# sourceMappingURL=craft-cooldowns.module.js.map