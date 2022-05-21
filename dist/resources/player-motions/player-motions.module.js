"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerMotionsModule = void 0;
const common_1 = require("@nestjs/common");
const player_motions_service_1 = require("./player-motions.service");
const player_motions_controller_1 = require("./player-motions.controller");
const typeorm_1 = require("@nestjs/typeorm");
const PlayerMotions_1 = require("../../entities/PlayerMotions");
let PlayerMotionsModule = class PlayerMotionsModule {
};
PlayerMotionsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([PlayerMotions_1.PlayerMotions])],
        controllers: [player_motions_controller_1.PlayerMotionsController],
        providers: [player_motions_service_1.PlayerMotionsService]
    })
], PlayerMotionsModule);
exports.PlayerMotionsModule = PlayerMotionsModule;
//# sourceMappingURL=player-motions.module.js.map