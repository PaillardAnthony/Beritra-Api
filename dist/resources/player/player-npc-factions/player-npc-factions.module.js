"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerNpcFactionsModule = void 0;
const common_1 = require("@nestjs/common");
const player_npc_factions_service_1 = require("./player-npc-factions.service");
const player_npc_factions_controller_1 = require("./player-npc-factions.controller");
const typeorm_1 = require("@nestjs/typeorm");
const PlayerNpcFactions_1 = require("../../../entities/PlayerNpcFactions");
let PlayerNpcFactionsModule = class PlayerNpcFactionsModule {
};
PlayerNpcFactionsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([PlayerNpcFactions_1.PlayerNpcFactions])],
        controllers: [player_npc_factions_controller_1.PlayerNpcFactionsController],
        providers: [player_npc_factions_service_1.PlayerNpcFactionsService]
    })
], PlayerNpcFactionsModule);
exports.PlayerNpcFactionsModule = PlayerNpcFactionsModule;
//# sourceMappingURL=player-npc-factions.module.js.map