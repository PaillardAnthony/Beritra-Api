"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCooldownsModule = void 0;
const common_1 = require("@nestjs/common");
const item_cooldowns_service_1 = require("./item-cooldowns.service");
const item_cooldowns_controller_1 = require("./item-cooldowns.controller");
const typeorm_1 = require("@nestjs/typeorm");
const ItemCooldowns_1 = require("../../entities/ItemCooldowns");
let ItemCooldownsModule = class ItemCooldownsModule {
};
ItemCooldownsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ItemCooldowns_1.ItemCooldowns])],
        controllers: [item_cooldowns_controller_1.ItemCooldownsController],
        providers: [item_cooldowns_service_1.ItemCooldownsService]
    })
], ItemCooldownsModule);
exports.ItemCooldownsModule = ItemCooldownsModule;
//# sourceMappingURL=item-cooldowns.module.js.map