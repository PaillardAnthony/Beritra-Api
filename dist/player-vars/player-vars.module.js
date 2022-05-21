"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerVarsModule = void 0;
const common_1 = require("@nestjs/common");
const player_vars_service_1 = require("./player-vars.service");
const player_vars_controller_1 = require("./player-vars.controller");
const typeorm_1 = require("@nestjs/typeorm");
const PlayerVars_1 = require("../entities/PlayerVars");
let PlayerVarsModule = class PlayerVarsModule {
};
PlayerVarsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([PlayerVars_1.PlayerVars])],
        controllers: [player_vars_controller_1.PlayerVarsController],
        providers: [player_vars_service_1.PlayerVarsService]
    })
], PlayerVarsModule);
exports.PlayerVarsModule = PlayerVarsModule;
//# sourceMappingURL=player-vars.module.js.map