"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerLifeStats = void 0;
const typeorm_1 = require("typeorm");
const Players_1 = require("./Players");
let PlayerLifeStats = class PlayerLifeStats {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player_id" }),
    __metadata("design:type", Number)
], PlayerLifeStats.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "hp", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerLifeStats.prototype, "hp", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "mp", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerLifeStats.prototype, "mp", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "fp", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerLifeStats.prototype, "fp", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Players_1.Players, (players) => players.playerLifeStats, {
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "player_id", referencedColumnName: "id" }]),
    __metadata("design:type", Players_1.Players)
], PlayerLifeStats.prototype, "player", void 0);
PlayerLifeStats = __decorate([
    (0, typeorm_1.Entity)("player_life_stats", { schema: "beritra" })
], PlayerLifeStats);
exports.PlayerLifeStats = PlayerLifeStats;
//# sourceMappingURL=PlayerLifeStats.js.map