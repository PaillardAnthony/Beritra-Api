"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerGameStatsModule = void 0;
const common_1 = require("@nestjs/common");
const player_game_stats_service_1 = require("./player-game-stats.service");
const player_game_stats_controller_1 = require("./player-game-stats.controller");
const typeorm_1 = require("@nestjs/typeorm");
const PlayerGameStats_1 = require("../../../entities/PlayerGameStats");
let PlayerGameStatsModule = class PlayerGameStatsModule {
};
PlayerGameStatsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([PlayerGameStats_1.PlayerGameStats])],
        controllers: [player_game_stats_controller_1.PlayerGameStatsController],
        providers: [player_game_stats_service_1.PlayerGameStatsService]
    })
], PlayerGameStatsModule);
exports.PlayerGameStatsModule = PlayerGameStatsModule;
//# sourceMappingURL=player-game-stats.module.js.map