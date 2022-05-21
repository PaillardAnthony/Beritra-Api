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
exports.PlayerPunishments = void 0;
const typeorm_1 = require("typeorm");
const Players_1 = require("./Players");
let PlayerPunishments = class PlayerPunishments {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player_id" }),
    __metadata("design:type", Number)
], PlayerPunishments.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
        primary: true,
        name: "punishment_type",
        enum: ["PRISON", "GATHER", "CHARBAN"],
    }),
    __metadata("design:type", String)
], PlayerPunishments.prototype, "punishmentType", void 0);
__decorate([
    (0, typeorm_1.Column)("int", {
        name: "start_time",
        nullable: true,
        unsigned: true,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], PlayerPunishments.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)("int", {
        name: "duration",
        nullable: true,
        unsigned: true,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], PlayerPunishments.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "reason", nullable: true }),
    __metadata("design:type", String)
], PlayerPunishments.prototype, "reason", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Players_1.Players, (players) => players.playerPunishments, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "player_id", referencedColumnName: "id" }]),
    __metadata("design:type", Players_1.Players)
], PlayerPunishments.prototype, "player", void 0);
PlayerPunishments = __decorate([
    (0, typeorm_1.Entity)("player_punishments", { schema: "beritra" })
], PlayerPunishments);
exports.PlayerPunishments = PlayerPunishments;
//# sourceMappingURL=PlayerPunishments.js.map