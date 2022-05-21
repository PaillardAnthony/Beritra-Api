"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerEffectsModule = void 0;
const common_1 = require("@nestjs/common");
const player_effects_service_1 = require("./player-effects.service");
const player_effects_controller_1 = require("./player-effects.controller");
const typeorm_1 = require("@nestjs/typeorm");
const PlayerEffects_1 = require("../../../entities/PlayerEffects");
let PlayerEffectsModule = class PlayerEffectsModule {
};
PlayerEffectsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([PlayerEffects_1.PlayerEffects])],
        controllers: [player_effects_controller_1.PlayerEffectsController],
        providers: [player_effects_service_1.PlayerEffectsService]
    })
], PlayerEffectsModule);
exports.PlayerEffectsModule = PlayerEffectsModule;
//# sourceMappingURL=player-effects.module.js.map