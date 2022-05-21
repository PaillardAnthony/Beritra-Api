"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerStigmasEquippedsModule = void 0;
const common_1 = require("@nestjs/common");
const player_stigmas_equippeds_service_1 = require("./player-stigmas-equippeds.service");
const player_stigmas_equippeds_controller_1 = require("./player-stigmas-equippeds.controller");
const typeorm_1 = require("@nestjs/typeorm");
const PlayerStigmasEquipped_1 = require("../entities/PlayerStigmasEquipped");
let PlayerStigmasEquippedsModule = class PlayerStigmasEquippedsModule {
};
PlayerStigmasEquippedsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([PlayerStigmasEquipped_1.PlayerStigmasEquipped])],
        controllers: [player_stigmas_equippeds_controller_1.PlayerStigmasEquippedsController],
        providers: [player_stigmas_equippeds_service_1.PlayerStigmasEquippedsService]
    })
], PlayerStigmasEquippedsModule);
exports.PlayerStigmasEquippedsModule = PlayerStigmasEquippedsModule;
//# sourceMappingURL=player-stigmas-equippeds.module.js.map