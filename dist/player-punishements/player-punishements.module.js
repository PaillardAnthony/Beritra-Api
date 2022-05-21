"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerPunishementsModule = void 0;
const common_1 = require("@nestjs/common");
const player_punishements_service_1 = require("./player-punishements.service");
const player_punishements_controller_1 = require("./player-punishements.controller");
const typeorm_1 = require("@nestjs/typeorm");
const PlayerPunishments_1 = require("../entities/PlayerPunishments");
let PlayerPunishementsModule = class PlayerPunishementsModule {
};
PlayerPunishementsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([PlayerPunishments_1.PlayerPunishments])],
        controllers: [player_punishements_controller_1.PlayerPunishementsController],
        providers: [player_punishements_service_1.PlayerPunishementsService]
    })
], PlayerPunishementsModule);
exports.PlayerPunishementsModule = PlayerPunishementsModule;
//# sourceMappingURL=player-punishements.module.js.map