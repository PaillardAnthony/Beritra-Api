"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerAtreianBestiariesModule = void 0;
const common_1 = require("@nestjs/common");
const player_atreian_bestiaries_service_1 = require("./player-atreian-bestiaries.service");
const player_atreian_bestiaries_controller_1 = require("./player-atreian-bestiaries.controller");
const typeorm_1 = require("@nestjs/typeorm");
const PlayerAtreianBestiary_1 = require("../../entities/PlayerAtreianBestiary");
let PlayerAtreianBestiariesModule = class PlayerAtreianBestiariesModule {
};
PlayerAtreianBestiariesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([PlayerAtreianBestiary_1.PlayerAtreianBestiary])],
        controllers: [player_atreian_bestiaries_controller_1.PlayerAtreianBestiariesController],
        providers: [player_atreian_bestiaries_service_1.PlayerAtreianBestiariesService]
    })
], PlayerAtreianBestiariesModule);
exports.PlayerAtreianBestiariesModule = PlayerAtreianBestiariesModule;
//# sourceMappingURL=player-atreian-bestiaries.module.js.map