"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerQuestsModule = void 0;
const common_1 = require("@nestjs/common");
const player_quests_service_1 = require("./player-quests.service");
const player_quests_controller_1 = require("./player-quests.controller");
const typeorm_1 = require("@nestjs/typeorm");
const PlayerQuests_1 = require("../../entities/PlayerQuests");
let PlayerQuestsModule = class PlayerQuestsModule {
};
PlayerQuestsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([PlayerQuests_1.PlayerQuests])],
        controllers: [player_quests_controller_1.PlayerQuestsController],
        providers: [player_quests_service_1.PlayerQuestsService]
    })
], PlayerQuestsModule);
exports.PlayerQuestsModule = PlayerQuestsModule;
//# sourceMappingURL=player-quests.module.js.map