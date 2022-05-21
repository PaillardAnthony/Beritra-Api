"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerRegisteredItemsModule = void 0;
const common_1 = require("@nestjs/common");
const player_registered_items_service_1 = require("./player-registered-items.service");
const player_registered_items_controller_1 = require("./player-registered-items.controller");
const typeorm_1 = require("@nestjs/typeorm");
const PlayerRegisteredItems_1 = require("../../entities/PlayerRegisteredItems");
let PlayerRegisteredItemsModule = class PlayerRegisteredItemsModule {
};
PlayerRegisteredItemsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([PlayerRegisteredItems_1.PlayerRegisteredItems])],
        controllers: [player_registered_items_controller_1.PlayerRegisteredItemsController],
        providers: [player_registered_items_service_1.PlayerRegisteredItemsService]
    })
], PlayerRegisteredItemsModule);
exports.PlayerRegisteredItemsModule = PlayerRegisteredItemsModule;
//# sourceMappingURL=player-registered-items.module.js.map