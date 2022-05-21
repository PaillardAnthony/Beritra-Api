"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerBindPointModule = void 0;
const common_1 = require("@nestjs/common");
const player_bind_point_service_1 = require("./player-bind-point.service");
const player_bind_point_controller_1 = require("./player-bind-point.controller");
const typeorm_1 = require("@nestjs/typeorm");
const PlayerBindPoint_1 = require("../entities/PlayerBindPoint");
let PlayerBindPointModule = class PlayerBindPointModule {
};
PlayerBindPointModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([PlayerBindPoint_1.PlayerBindPoint])],
        controllers: [player_bind_point_controller_1.PlayerBindPointController],
        providers: [player_bind_point_service_1.PlayerBindPointService]
    })
], PlayerBindPointModule);
exports.PlayerBindPointModule = PlayerBindPointModule;
//# sourceMappingURL=player-bind-point.module.js.map